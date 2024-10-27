import app from "./app.js";
import { connectDb } from './database/db.js'
import { v2 as cloudinary } from 'cloudinary';
import Razorpay from 'razorpay'


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Initialize Razorpay with credentials
export const razorpay = new Razorpay({
    key_id: 'rzp_test_Z0KrJXmirzFbGW',
    key_secret: 'Oq880TpUHhzU4XZuRlzZ4b0w'
});

// // Enhanced Razorpay connection verification
// const verifyRazorpayConnection = async () => {
//     try {
//         // Test with a specific plan fetch instead of all plans
//         const response = await razorpay.plans.fetch('plan_PE4AU1jXtuW1Lq');
//         console.log('Razorpay connection verified with plan:', response.id);
//         return true;
//     } catch (error) {
//         console.log('Razorpay connection details:', {
//             status: error.statusCode,
//             message: error.error?.description,
//             code: error.error?.code
//         });
//         return false;
//     }
// };

// verifyRazorpayConnection();



app.listen(process.env.PORT, () => {
    connectDb()
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})