import React from 'react';
import { Card } from 'react-bootstrap';

// Helper to generate an icon with a link if the URL exists
const SocialIcon = ({ url, type, color }) => {
  if (!url) return '';

  const paths = {
    linkedin: 'M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 13 11.1V10.28H10V18.5H13V13.07C13 12.37 13.1 11.64 14.28 11.64C15.46 11.64 15.5 12.5 15.5 13.1V18.5H18.5Z',
    instagram: 'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z',
    twitter: 'M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 2.9,4.79C2.5,5.45 2.29,6.24 2.29,7.07C2.29,8.53 3,9.73 4.1,10.43C3.42,10.41 2.79,10.21 2.22,9.86V9.91C2.22,11.91 3.64,13.59 5.6,14C5.22,14.1 4.82,14.14 4.4,14.14C4.13,14.14 3.87,14.11 3.62,14.07C4.16,15.68 5.69,16.8 7.45,16.84C6.08,17.92 4.37,18.5 2.5,18.5C2.17,18.5 1.85,18.48 1.53,18.44C3.1,19.54 5,20.25 7,20.25C16,20.25 20.33,12.45 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.22,7.63 21.94,6.87 22.46,6Z',
    facebook: 'M18,3.5A1.5,1.5 0 0,1 19.5,5V19A1.5,1.5 0 0,1 18,20.5H13V14.5H15.5L15.89,12H13V10.5C13,9.67 13.2,9 14.23,9H15.5V6.5H13.25C10.75,6.5 9.5,7.7 9.5,10V12H7V14.5H9.5V20.5H6A1.5,1.5 0 0,1 4.5,19V5A1.5,1.5 0 0,1 6,3.5H18Z',
    youtube: 'M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,12.44 21.94,13.13 21.84,13.93C21.78,14.73 21.69,15.36 21.56,15.83C21.31,16.75 20.73,17.31 19.82,17.56C19.36,17.69 18.73,17.78 17.93,17.84C17.13,17.91 16.44,17.94 15.84,17.94L15,18H9C8.56,18 7.87,17.94 7.07,17.84C6.27,17.78 5.64,17.69 5.17,17.56C4.25,17.31 3.69,16.75 3.44,15.83C3.31,15.36 3.22,14.73 3.16,13.93C3.09,13.13 3.06,12.44 3.06,12L3,11.16C3,10.56 3.06,9.87 3.16,9.07C3.22,8.27 3.31,7.64 3.44,7.17C3.69,6.25 4.25,5.69 5.17,5.44C5.64,5.31 6.27,5.22 7.07,5.16C7.87,5.09 8.56,5.06 9,5.06H15C15.44,5.06 16.13,5.09 16.93,5.16C17.73,5.22 18.36,5.31 18.83,5.44C19.75,5.69 20.31,6.25 20.56,7.17Z',
    whatsapp: 'M12.04,21.02C16.58,21.02 20.23,17.37 20.23,12.83C20.23,8.29 16.58,4.64 12.04,4.64C7.5,4.64 3.85,8.29 3.85,12.83C3.85,15.03 4.63,17.04 5.96,18.57L3.34,21.19L6.04,20.4C7.49,20.83 9.04,21.02 12.04,21.02M12.04,5.93C15.91,5.93 18.94,8.96 18.94,12.83C18.94,16.7 15.91,19.73 12.04,19.73C9.39,19.73 7.03,18.62 5.5,16.86L5.22,16.5L8.03,17.23L8.3,16.95C6.54,15.42 5.43,13.06 5.43,10.41C5.43,8.96 6.54,6.84 12.04,5.93M10.13,9.73L10.13,9.73C9.89,9.73 9.74,9.74 9.55,9.93C9.35,10.12 8.8,10.65 8.8,11.69C8.8,12.73 9.56,13.64 9.71,13.83C9.87,14.02 11.28,16.16 13.35,16.96C15.42,17.76 15.42,17.28 15.77,17.24C16.12,17.2 16.97,16.74 17.19,16.13C17.41,15.52 17.41,15.04 17.35,14.94C17.29,14.84 17.14,14.78 16.92,14.66C16.7,14.54 15.71,14.04 15.49,13.96C15.27,13.88 15.12,13.82 14.97,14.06C14.82,14.3 14.37,14.84 14.22,15.02C14.07,15.2 13.92,15.22 13.7,15.1C13.48,14.98 12.73,14.73 11.82,13.91C11.08,13.26 10.59,12.45 10.47,12.23C10.35,12.01 10.46,11.89 10.58,11.77C10.68,11.67 10.81,11.5 10.94,11.36C11.07,11.22 11.13,11.11 11.23,10.93C11.33,10.75 11.27,10.61 11.21,10.5C11.15,10.39 10.63,9.85 10.41,9.77C10.19,9.69 10.13,9.73 10.13,9.73Z',
    calendly: 'M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6C21,4.9 20.1,4 19,4M19,20H5V10H19V20M19,8H5V6H19V8M12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5M17,13.5A1.5,1.5 0 0,1 15.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,13.5M7,13.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 7,10.5A1.5,1.5 0 0,1 8.5,12A1.5,1.5 0 0,1 7,13.5M12,18.5A1.5,1.5 0 0,1 10.5,17A1.5,1.5 0 0,1 12,15.5A1.5,1.5 0 0,1 13.5,17A1.5,1.5 0 0,1 12,18.5M17,18.5A1.5,1.5 0 0,1 15.5,17A1.5,1.5 0 0,1 17,15.5A1.5,1.5 0 0,1 18.5,17A1.5,1.5 0 0,1 17,18.5M7,18.5A1.5,1.5 0 0,1 5.5,17A1.5,1.5 0 0,1 7,15.5A1.5,1.5 0 0,1 8.5,17A1.5,1.5 0 0,1 7,18.5Z',
  };

  const svg = `<svg width="24" height="24" viewBox="0 0 24 24" style="display: inline-block;"><path d="${paths[type]}" fill="${color}" /></svg>`;
  return `<a href="${url}" target="_blank" style="display: inline-block; margin: 0 4px; text-decoration: none;">${svg}</a>`;
};

function Preview({ data }) {
  const { themeColor, textColor, signatureBgColor, darkModeTextColor, darkModeBgColor } = data;

  const darkStyles = `
    .dark-mode-text { color: ${darkModeTextColor} !important; }
    .dark-mode-bg { background-color: ${darkModeBgColor} !important; }
    .dark-mode-hide-logo { display: none !important; }
    .dark-mode-show-logo { display: block !important; }
  `;

  const socialIconsHTML = [
    SocialIcon({ url: data.linkedinUrl, type: 'linkedin', color: themeColor }),
    SocialIcon({ url: data.instagramUrl, type: 'instagram', color: themeColor }),
    SocialIcon({ url: data.twitterUrl, type: 'twitter', color: themeColor }),
    SocialIcon({ url: data.facebookUrl, type: 'facebook', color: themeColor }),
    SocialIcon({ url: data.youtubeUrl, type: 'youtube', color: themeColor }),
    SocialIcon({ url: data.whatsappUrl, type: 'whatsapp', color: themeColor }),
    SocialIcon({ url: data.calendlyUrl, type: 'calendly', color: themeColor }),
  ].filter(Boolean).join('');

  const finalHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style type="text/css">
          :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
          }
          @media (prefers-color-scheme: dark) {
            ${darkStyles}
          }
        </style>
      </head>
      <body>
        <table class="dark-mode-bg" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px; background-color:${signatureBgColor}; font-family: Arial, sans-serif;">
          <tr>
            <td style="padding: 20px;">
              <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                <!-- Fila Principal: Foto y Datos -->
                <tr>
                  ${data.fotoUrl ? `<td width="100" style="vertical-align: top; padding-right: 20px;"><img src="${data.fotoUrl}" alt="Foto" style="width: 90px; height: 90px; border-radius: 50%;"></td>` : ''}
                  <td style="vertical-align: top;">
                    <p class="dark-mode-text" style="margin:0; font-size: 18px; font-weight: bold; color: ${textColor};">${data.nombreCompleto}</p>
                    <p class="dark-mode-text" style="margin:0; font-size: 15px; color: ${textColor};">${data.cargo}</p>
                    ${data.empresa ? `<p class="dark-mode-text" style="margin: 5px 0; font-size: 15px; font-weight: bold; color: ${textColor};">${data.empresa}</p>` : ''}
                    ${data.slogan ? `<p class="dark-mode-text" style="margin:0; font-style: italic; font-size: 14px; color: ${textColor};">${data.slogan}</p>` : ''}
                  </td>
                </tr>
                <!-- Separador -->
                <tr><td colspan="2" style="padding: 10px 0;"><hr style="border: 0; border-top: 1px solid #dddddd;"></td></tr>
                <!-- Fila de Contacto y Redes -->
                <tr>
                  <td colspan="2">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                      <tr>
                        <td style="vertical-align: top;">
                          ${data.telefonoDirecto ? `<p class="dark-mode-text" style="margin: 2px 0; font-size: 13px; color: ${textColor};"><a href="tel:${data.telefonoDirecto}" style="color:${themeColor}; text-decoration:none;">Tel: ${data.telefonoDirecto}</a></p>` : ''}
                          ${data.email ? `<p class="dark-mode-text" style="margin: 2px 0; font-size: 13px; color: ${textColor};"><a href="mailto:${data.email}" style="color:${themeColor}; text-decoration:none;">${data.email}</a></p>` : ''}
                          ${data.sitioWeb ? `<p class="dark-mode-text" style="margin: 2px 0; font-size: 13px; color: ${textColor};"><a href="http://${data.sitioWeb}" target="_blank" style="color:${themeColor}; text-decoration:none;">${data.sitioWeb}</a></p>` : ''}
                          ${data.ubicacion ? `<p class="dark-mode-text" style="margin: 2px 0; font-size: 13px; color: ${textColor};">${data.ubicacion}</p>` : ''}
                        </td>
                        <td style="text-align: right; vertical-align: bottom;">${socialIconsHTML}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Fila de Extras -->
                ${data.cierreCta || data.qrCodeUrl || data.logoEmpresaUrl ? '<tr><td colspan="2" style="padding-top: 15px;">' : ''}
                  <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                    <tr>
                      <td style="vertical-align: middle;">
                        ${data.cierreCta ? `<p class="dark-mode-text" style="margin:0; font-size: 14px; font-style:italic; color:${themeColor};">${data.cierreCta}</p>` : ''}
                        ${data.logoEmpresaUrl ? `<img src="${data.logoEmpresaUrl}" alt="Logo Empresa" style="max-width: 120px; margin-top: 10px;">` : ''}
                      </td>
                      ${data.qrCodeUrl ? `<td width="80" style="text-align: right; vertical-align: middle;"><img src="${data.qrCodeUrl}" alt="QR Code" style="width: 70px; height: 70px;"></td>` : ''}
                    </tr>
                  </table>
                ${data.cierreCta || data.qrCodeUrl || data.logoEmpresaUrl ? '</td></tr>' : ''}
                <!-- Disclaimer -->
                ${data.disclaimer ? `<tr><td colspan="2" style="padding-top: 15px;"><p style="font-size: 10px; color: #999999;">${data.disclaimer}</p></td></tr>` : ''}
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return (
    <Card>
      <Card.Header as="h5">Vista Previa</Card.Header>
      <Card.Body>
        <div dangerouslySetInnerHTML={{ __html: finalHtml }} />
        <hr />
        <h5>Instrucciones</h5>
        <p>Copia y pega la firma directamente desde esta vista previa a la configuración de tu cliente de correo.</p>
      </Card.Body>
    </Card>
  );
}

export default Preview;