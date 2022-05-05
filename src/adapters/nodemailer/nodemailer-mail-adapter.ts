import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e775b0073df654",
        pass: "801352db95871f"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <equipe@feedget.com>',
            to: 'Felipe Nogueira <felipenogueira.94@gmail.com>',
            subject,
            html: body,
        });
    };
}