import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email and PDF link are required" }, { status: 400 });
        }

        // Create Nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Use environment variables
                pass: process.env.EMAIL_PASS,
            },
        });

        let mailOptions = {
            from: `"Billionaire Blueprint" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Billionaire Blueprint Download Link",
            html: `
                <h3>Thank you for your purchase!</h3>
                <p>Click below to download your MasterClass Course and eBook:</p>
                <a href="https://drive.google.com/drive/folders/1xJEnpCo4lhQwWezI-VEKw35UxjWndwmP" target="_blank">Download</a>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
