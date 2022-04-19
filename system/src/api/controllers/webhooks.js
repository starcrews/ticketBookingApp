// exports.paymentSuccess = async (req, res) => {
//   try {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         errors: await GeneralFunctions.validationErrorCheck(errors)
//       });
//     }

//     let hash = crypto.createHmac('sha512', process.env.PAYSTACK_TEST_SECRET)
//       .update(JSON.stringify(req.body)).digest('hex');

//     if (hash == req.headers['x-paystack-signature']) {
//       let event = JSON.parse(req.body);

//       console.log(event);

//       if (event.event == 'charge.success') {
//         await GeneralFunctions.userSavePayment(event);
//       } else if (event.event == 'transfer.success') {
//         await GeneralFunctions.hostSavePayment(event);
//       }

//       res.send(200);
//     }
//   } catch (error) {
//     res.status(400).json({
//       error: 'Error: An error occurred while the payment details were being saved.',
//     });
//   }
// }