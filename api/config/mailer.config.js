const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "albagremar@gmail.com",
    pass: process.env.MAIL_PASS,
  },
});

module.exports.sendConfirmationEmail = (user) => {
  transporter
    .sendMail({
      from: "Civitatis <albagremar@gmail.com>",
      to: user.email,
      subject: "Confirm your account",
      html: `
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

      <head>
        <!--[if gte mso 9]><xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml><![endif]-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="format-detection" content="telephone=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
      
        <style type="text/css">
          html,
          body {
            font-family: 'Montserrat', sans-serif;
          }
      
          a {
            text-decoration: none;
          }
      
         
          body {
            width: 100%!important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
          }
      
          table {
            border-collapse: collapse!important;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
      
          .gmailfix {
            display: none;
            display: none!important;
          }
      
        </style>
        <!--[if gte mso 9]>
      <style type="text/css">
      sup {vertical-align: baseline; position: relative; top: -0.4em; font-size:85%;}
      </style>
      <![endif]-->
        <!--[if !mso]><!-->
        <style type="text/css">
          sup {
            font-size: 90%;
            line-height: 8px;
          }
      
          .width-100 {
            width: 100%!important;
            height: auto!important;
          }
      
          .width-1001 {
            width: 100%!important;
            height: auto!important;
          }
        </style>
        <!--<![endif]-->
      </head>
      
      <body marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" rightmargin="0" style="margin:0; padding:0;" bgcolor="#ffffff">
      
        <table width="600px" align="center" border="0" cellspacing="0" cellpadding="0" style="display: block; background-color: #fff">
          <tbody>
            <tr>
              <td bgcolor="#ffffff" align="center" valign="top" className="main-padding" style="padding: 0px; margin: 0;">
      
                <!-- MAIN-1 -->
                <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" style="display: block; background-color: #ffffff; margin: 0; padding: 0;">
                  <tbody>
                    <tr>
                      <td bgcolor="#ffffff" align="center" valign="top" className="main-padding" style="padding: 0px; margin: 0;">
                        <!-- start IMAGE-1 -->
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" style="display: block; background-color: #ffffff; margin: 0; padding: 0;">
                          <tr>
                            <td bgcolor="#ffffff" align="center" valign="top" className="main-padding" style="padding: 0px; margin: 0;">
                              <table className="MainTable" width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%">
                                <tr>
                                  <td className="padding-top-0" align="center" valign="top" style="padding: 0px; margin: 0;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="center" valign="top">
                                          <a href="${process.env.API_URL}/users/${user.id}/confirm" target="_blank">
                                            <img className="width-100" src="img/civitatis_cabecera.jpg" alt="Si no ve las imagenes de este correo, haga clic en HABILITAR para cargarlas"
                                            width="100%" style="display: block;" border="0" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- end IMAGE-1 -->
      
                        <!-- start TEXT-1 -->
                        <table align="center" width="600px" border="0" cellspacing="0" cellpadding="0" style="display: block; background-color: #ffffff; margin: 0; padding: 0;">
                          <tr>
                            <td bgcolor="#ffffff" align="center" valign="top" className="main-padding" style="padding: 0; margin: 0;">
                              <table className="MainTable" width="600" border="0" cellspacing="0" cellpadding="0" style="width:600px">
                                <tr>
                                  <td align="center" valign="top" style="padding:0px; margin: 0; padding-top: 10px; padding-bottom: 20px;">
                                    <table width="600px" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="center" valign="top" style="mso-line-height-rule: exactly; padding: 20px;">
                                          <h1 style="text-align: left; color: #f70759; font-size: 18pt; width: 90%;">Hello [nombre del destinatario]!</h1>
                                          <p style="text-align: left; color: black; font-size: 12pt; width: 90%;">
                                            Thank you for joining Civitatis! To complete your registration, please <b>confirm your email address by clicking on the confirm button</b>.<br><br>
                                            Once confirmed, you will be able to access your account on our website and start planning your adventures. If you need any assistance, our support team is at your disposal.<br>
                                          </p>
                                          <p style="text-align: left; color: black; font-size: 12pt; width: 90%;">
                                            <b>Welcome to the Civitatis community!</b><br>
                                            The Civitatis team.
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- end TEXT-1 -->
      
                        <!-- start IMAGE-2 -->
                        <table width="600px" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0; padding: 0; margin-bottom: 70px;">
                          <tr>
                            <td bgcolor="#ffffff" align="center" valign="top" className="main-padding" style="padding: 0px;">
                              <table className="MainTable" width="600" border="0" cellspacing="0" cellpadding="0" style="width:600px">
                                <tr>
                                  <td className="padding-top-0" align="center" valign="top" style="padding-bottom: 0px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="center" valign="top">
                                          <a href="${process.env.API_URL}/users/${user.id}/confirm" target="_blank">
                                            <img src="img/civitatis_boton.jpg" alt="Confirm" width="200" style="display:block; margin: 0 auto;" border="0" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- end IMAGE-2 -->
      
                        <!-- start IMAGE-3 -->
                        <table width="600px" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0; padding: 0">
                          <tr>
                            <td bgcolor="#f70759" align="center" valign="top" className="main-padding" style="padding: 20px 0px;">
                              <table className="MainTable" width="600" border="0" cellspacing="0" cellpadding="0" style="width:600px">
                                <tr>
                                  <td className="padding-top-0" align="center" valign="top" style="padding-bottom: 0px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="center" valign="top">
                                          <a href="https://www.civitatis.com/es/" target="_blank">
                                              <img src="img/logo_civitatis.png" alt="Civitatis" width="70" style="display:block; margin: 0 auto;" border="0" />
                                          </a>
                                          </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- end IMAGE-3 -->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      
        <div className="gmailfix" style="white-space:nowrap; font:15px courier; line-height:0; color:#ffffff; background-color:#ffffff;">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      
      </body>
      
      </html>
      `,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};
