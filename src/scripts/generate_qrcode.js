import QRCode from "qrcode";
import Fs from "fs";

export const saveQRCode = (text, filePath) => {
    QRCode.toDataURL(text, (err, url) => {
        if (err) throw err;

        const base64Data = url.replace(/^data:image\/png;base64,/, '');
        Fs.writeFile(filePath, base64Data, 'base64', (err) => {
            if (err) throw err;
        });
    });
}

// saveQRCode('https://www.example.com', 'qrcode.png');