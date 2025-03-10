import Razorpay from "razorpay";

export async function POST(req) {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const order = await razorpay.orders.create({
            amount: 29900, // ₹299 (in paise)
            currency: "INR",
            payment_capture: 1,
        });

        return new Response(JSON.stringify(order), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
