import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user: "mail@gmail.com",
        pass: "password"
    }
});

export const sendEmail = async (mailOptions: object) => {
    try {
        const info = await transporter.sendMail(mailOptions);
        if(info.accepted.length > 0) return true;
        else return false;
    } catch (error) {
        return false;
    }
}

