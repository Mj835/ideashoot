import React, { useState, useEffect } from "react";
import { useConnection } from '@solana/wallet-adapter-react';
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  PublicKey,
  Keypair,
} from "@solana/web3.js";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import BigNumber from "bignumber.js";

import {
  encodeURL,
  findReference,
  FindReferenceError,
  validateTransfer,
  ValidateTransferError,
} from "@solana/pay";
import { QRCode } from "../QRCode";

const PaymentStatus = {
  New: "New",
  Pending: "Pending",
  Confirmed: "Confirmed",
  Valid: "Valid",
  Invalid: "Invalid",
  Finalized: "Finalized",
};

const Orders = () => {
  

  const state = useSelector((state) => state.addItem);
  const { connection } = useConnection();

  const [recipient, setRecipient] = useState();
  const [reference, setReference] = useState();
  const [label, setLabel] = useState();
  const [amount, setAmount] = useState();
  const [memo, setMemo] = useState();
  const [message, setMessage] = useState();
  const [url, setUrl] = useState();
  const [status, setStatus] = useState(PaymentStatus.Pending);
  const [signature, setSignature] = useState();

  useEffect(() => {
    if (state && state.length > 0) {
      const totalFinalAmount = state.reduce(
        (a, c) => a + Number(c.itemSalePrice),
        0
      );
      setAmount(new BigNumber(totalFinalAmount));
    }
    setRecipient(new PublicKey("GJpdsHK4AHVVRMUiTbsnmdz2r7gi5hJaP6V6wBfgrpd1"));
    setReference(new Keypair().publicKey);
    setLabel("SolKicks");
    setMessage("SolKicks message");
    setMemo("memo for purchase at SolKicks");
  }, []);

  useEffect(() => {
    if (recipient && reference && label && message && memo && amount) {
      const url = encodeURL({
        recipient: recipient,
        amount: amount,
        reference: reference,
        label: label,
        message: message,
        memo: memo,
      });
      setUrl(url);
    }
  }, [recipient, reference, label, amount, memo, message]);

  // When the status is pending, poll for the transaction using the reference key
  useEffect(() => {
    if (!(status === PaymentStatus.Pending && reference && !signature)) return;
    let changed = false;

    const interval = setInterval(async () => {
      let signature;
      try {
        signature = await findReference(connection, reference);

        if (!changed) {
          clearInterval(interval);
          setSignature(signature.signature);
          setStatus(PaymentStatus.Confirmed);
          // navigate('/confirmed', true);
        }
      } catch (error) {
        // If the RPC node doesn't have the transaction signature yet, try again
        if (!(error instanceof FindReferenceError)) {
          console.error(error);
        }
      }
    }, 250);

    return () => {
      changed = true;
      clearInterval(interval);
    };
  }, [status, reference, signature, connection]);

  // // When the status is confirmed, validate the transaction against the provided params
  // useEffect(() => {
  //   if (!(status === PaymentStatus.Confirmed && signature && amount)) return;
  //   let changed = false;

  //   const run = async () => {
  //     try {
  //       await validateTransfer(connection, signature, {
  //         recipient,
  //         amount,
  //         reference,
  //       });

  //       if (!changed) {
  //         setStatus(PaymentStatus.Valid);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       // // If the RPC node doesn't have the transaction yet, try again
  //       if (
  //         error instanceof ValidateTransferError &&
  //         (error.message === "not found" || error.message === "missing meta")
  //       ) {
  //         console.warn(error);
  //         timeout = setTimeout(run, 250);
  //         return;
  //       }

  //       console.error(error);
  //       setStatus(PaymentStatus.Invalid);
  //     }
  //   };
  //   let timeout = setTimeout(run, 0);

  //   return () => {
  //     changed = true;
  //     clearTimeout(timeout);
  //   };
  // }, [status, signature, amount, connection, recipient, reference]);

  // // // When the status is valid, poll for confirmations until the transaction is finalized
  // // useEffect(() => {
  // //     if (!(status === PaymentStatus.Valid && signature)) return;
  // //     let changed = false;

  // //     const interval = setInterval(async () => {
  // //         try {
  // //             const response = await connection.getSignatureStatus(signature);
  // //             const status = response.value;
  // //             if (!status) return;
  // //             if (status.err) throw status.err;

  // //             if (!changed) {
  // //                 const confirmations = (status.confirmations || 0);
  // //                 setConfirmations(confirmations);

  // //                 if (status.confirmationStatus === 'finalized') {
  // //                     clearInterval(interval);
  // //                     setStatus(PaymentStatus.Finalized);
  // //                 }
  // //             }
  // //         } catch (error) {
  // //             console.log(error);
  // //         }
  // //     }, 250);

  // //     return () => {
  // //         changed = true;
  // //         clearInterval(interval);
  // //     };
  // // }, [status, signature, connection]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="checkoutWrapper">
          <Link
            to="/checkout"
            style={{ textDecoration: "none" }}
            className="backButton"
          >
            <MdKeyboardArrowLeft size={20} color="#82798B" />
            <span>Back</span>
          </Link>

          {url && status === PaymentStatus.Pending && <QRCode url={url} />}

          {status && <>Transfer status : {status}</>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
