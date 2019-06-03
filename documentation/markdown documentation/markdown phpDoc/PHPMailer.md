

#

# PHPMailer.php Documentation

### `namespace PHPMailer\PHPMailer`

PHPMailer - PHP email creation and transport class. PHP Version 5.5.

 * **See also:** https://github.com/PHPMailer/PHPMailer/ The PHPMailer GitHub project

     <p>
 * **Author:**
   * Marcus Bointon (Synchro/coolbru) <phpmailer@synchromedia.co.uk>
   * Jim Jagielski (jimjag) <jimjag@gmail.com>
   * Andy Prevost (codeworxtech) <codeworxtech@users.sourceforge.net>
   * Brent R. Matzelle (original founder)
 * **Copyright:**
   * 2012 - 2017 Marcus Bointon
   * 2010 - 2012 Jim Jagielski
   * 2004 - 2009 Andy Prevost
 * **License:** http://www.gnu.org/copyleft/lesser.html GNU Lesser General Public License

### `class PHPMailer`

PHPMailer - PHP email creation and transport class.

 * **Author:**
   * Marcus Bointon (Synchro/coolbru) <phpmailer@synchromedia.co.uk>
   * Jim Jagielski (jimjag) <jimjag@gmail.com>
   * Andy Prevost (codeworxtech) <codeworxtech@users.sourceforge.net>
   * Brent R. Matzelle (original founder)

### `public $Priority`

Email priority. Options: null (default), 1 = High, 3 = Normal, 5 = low. When null, the header is not set at all.

 * **Type:** `int` — 

### `public $CharSet = self::CHARSET_ISO88591`

The character set of the message.

 * **Type:** `string` — 

### `public $ContentType = self::CONTENT_TYPE_PLAINTEXT`

The MIME Content-type of the message.

 * **Type:** `string` — 

### `public $Encoding = self::ENCODING_8BIT`

The message encoding. Options: "8bit", "7bit", "binary", "base64", and "quoted-printable".

 * **Type:** `string` — 

### `public $ErrorInfo = ''`

Holds the most recent mailer error message.

 * **Type:** `string` — 

### `public $From = 'root@localhost'`

The From email address for the message.

 * **Type:** `string` — 

### `public $FromName = 'Root User'`

The From name of the message.

 * **Type:** `string` — 

### `public $Sender = ''`

The envelope sender of the message. This will usually be turned into a Return-Path header by the receiver, and is the address that bounces will be sent to. If not empty, will be passed via `-f` to sendmail or as the 'MAIL FROM' value over SMTP.

 * **Type:** `string` — 

### `public $Subject = ''`

The Subject of the message.

 * **Type:** `string` — 

### `public $Body = ''`

An HTML or plain text message body. If HTML then call isHTML(true).

 * **Type:** `string` — 

### `public $AltBody = ''`

The plain-text message body. This body can be read by mail clients that do not have HTML email capability such as mutt & Eudora. Clients that can read HTML will view the normal Body.

 * **Type:** `string` — 

### `public $Ical = ''`

An iCal message part body. Only supported in simple alt or alt_inline message types To generate iCal event structures, use classes like EasyPeasyICS or iCalcreator.

 * **See also:**
   * http://sprain.ch/blog/downloads/php-class-easypeasyics-create-ical-files-with-php/
   * http://kigkonsult.se/iCalcreator/

     <p>
 * **Type:** `string` — 

### `protected $MIMEBody = ''`

The complete compiled MIME message body.

 * **Type:** `string` — 

### `protected $MIMEHeader = ''`

The complete compiled MIME message headers.

 * **Type:** `string` — 

### `protected $mailHeader = ''`

Extra headers that createHeader() doesn't fold in.

 * **Type:** `string` — 

### `public $WordWrap = 0`

Word-wrap the message body to this number of chars. Set to 0 to not wrap. A useful value here is 78, for RFC2822 section 2.1.1 compliance.

 * **See also:** static::STD_LINE_LENGTH

     <p>
 * **Type:** `int` — 

### `public $Mailer = 'mail'`

Which method to use to send mail. Options: "mail", "sendmail", or "smtp".

 * **Type:** `string` — 

### `public $Sendmail = '`

The path to the sendmail program.

 * **Type:** `string` — 

### `public $UseSendmailOptions = true`

Whether mail() uses a fully sendmail-compatible MTA. One which supports sendmail's "-oi -f" options.

 * **Type:** `bool` — 

### `public $ConfirmReadingTo = ''`

The email address that a reading confirmation should be sent to, also known as read receipt.

 * **Type:** `string` — 

### `public $Hostname = ''`

The hostname to use in the Message-ID header and as default HELO string. If empty, PHPMailer attempts to find one with, in order, $_SERVER['SERVER_NAME'], gethostname(), php_uname('n'), or the value 'localhost.localdomain'.

 * **Type:** `string` — 

### `public $MessageID = ''`

An ID to be used in the Message-ID header. If empty, a unique id will be generated. You can set your own, but it must be in the format "<id@domain>", as defined in RFC5322 section 3.6.4 or it will be ignored.

 * **See also:** https://tools.ietf.org/html/rfc5322#section-3.6.4

     <p>
 * **Type:** `string` — 

### `public $MessageDate = ''`

The message Date to be used in the Date header. If empty, the current date will be added.

 * **Type:** `string` — 

### `public $Host = 'localhost'`

SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host by using this format: [hostname:port] (e.g. "smtp1.example.com:25;smtp2.example.com"). You can also specify encryption type, for example: (e.g. "tls://smtp1.example.com:587;ssl://smtp2.example.com:465"). Hosts will be tried in order.

 * **Type:** `string` — 

### `public $Port = 25`

The default SMTP server port.

 * **Type:** `int` — 

### `public $Helo = ''`

The SMTP HELO of the message. Default is $Hostname. If $Hostname is empty, PHPMailer attempts to find one with the same method described above for $Hostname.

 * **See also:** PHPMailer::$Hostname

     <p>
 * **Type:** `string` — 

### `public $SMTPSecure = ''`

What kind of encryption to use on the SMTP connection. Options: '', 'ssl' or 'tls'.

 * **Type:** `string` — 

### `public $SMTPAutoTLS = true`

Whether to enable TLS encryption automatically if a server supports it, even if `SMTPSecure` is not set to 'tls'. Be aware that in PHP >= 5.6 this requires that the server's certificates are valid.

 * **Type:** `bool` — 

### `public $SMTPAuth = false`

Whether to use SMTP authentication. Uses the Username and Password properties.

 * **See also:**
   * PHPMailer::$Username
   * PHPMailer::$Password

     <p>
 * **Type:** `bool` — 

### `public $SMTPOptions = []`

Options array passed to stream_context_create when connecting via SMTP.

 * **Type:** `array` — 

### `public $Username = ''`

SMTP username.

 * **Type:** `string` — 

### `public $Password = ''`

SMTP password.

 * **Type:** `string` — 

### `public $AuthType = ''`

SMTP auth type. Options are CRAM-MD5, LOGIN, PLAIN, XOAUTH2, attempted in that order if not specified.

 * **Type:** `string` — 

### `protected $oauth`

An instance of the PHPMailer OAuth class.

 * **Type:** `OAuth` — 

### `public $Timeout = 300`

The SMTP server timeout in seconds. Default of 5 minutes (300sec) is from RFC2821 section 4.5.3.2.

 * **Type:** `int` — 

### `public $dsn = ''`

Comma separated list of DSN notifications 'NEVER' under no circumstances a DSN must be returned to the sender. If you use NEVER all other notifications will be ignored. 'SUCCESS' will notify you when your mail has arrived at its destination. 'FAILURE' will arrive if an error occurred during delivery. 'DELAY' will notify you if there is an unusual delay in delivery, but the actual delivery's outcome (success or failure) is not yet decided.

 * **See also:** https://tools.ietf.org/html/rfc3461 See section 4.1 for more information about NOTIFY

### `public $SMTPDebug = 0`

SMTP class debug output mode. Debug output level. Options: * `0` No output * `1` Commands * `2` Data and commands * `3` As 2 plus connection status * `4` Low-level data output.

 * **See also:** SMTP::$do_debug

     <p>
 * **Type:** `int` — 

### `public $Debugoutput = 'echo'`

How to handle debug output. Options: * `echo` Output plain-text as-is, appropriate for CLI * `html` Output escaped, line breaks converted to `<br>`, appropriate for browser output * `error_log` Output to error log as configured in php.ini By default PHPMailer will use `echo` if run from a `cli` or `cli-server` SAPI, `html` otherwise. Alternatively, you can provide a callable expecting two params: a message string and the debug level:

```php $mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";}; ```

Alternatively, you can pass in an instance of a PSR-3 compatible logger, though only `debug` level output is used:

```php $mail->Debugoutput = new myPsr3Logger; ```

 * **See also:** SMTP::$Debugoutput

     <p>
 * **Type:** `string|callable|\Psr\Log\LoggerInterface` — 

### `public $SMTPKeepAlive = false`

Whether to keep SMTP connection open after each message. If this is set to true then to close the connection requires an explicit call to smtpClose().

 * **Type:** `bool` — 

### `public $SingleTo = false`

Whether to split multiple to addresses into multiple messages or send them all in one message. Only supported in `mail` and `sendmail` transports, not in SMTP.

 * **Type:** `bool` — 

### `protected $SingleToArray = []`

Storage for addresses when SingleTo is enabled.

 * **Type:** `array` — 

### `public $do_verp = false`

Whether to generate VERP addresses on send. Only applicable when sending via SMTP.

 * **See also:**
   * https://en.wikipedia.org/wiki/Variable_envelope_return_path
   * http://www.postfix.org/VERP_README.html Postfix VERP info

     <p>
 * **Type:** `bool` — 

### `public $AllowEmpty = false`

Whether to allow sending messages with an empty body.

 * **Type:** `bool` — 

### `public $DKIM_selector = ''`

DKIM selector.

 * **Type:** `string` — 

### `public $DKIM_identity = ''`

DKIM Identity. Usually the email address used as the source of the email.

 * **Type:** `string` — 

### `public $DKIM_passphrase = ''`

DKIM passphrase. Used if your key is encrypted.

 * **Type:** `string` — 

### `public $DKIM_domain = ''`

DKIM signing domain name.

 * **Example:** 'example.com'

     <p>
 * **Type:** `string` — 

### `public $DKIM_copyHeaderFields = true`

DKIM Copy header field values for diagnostic use.

 * **Type:** `bool` — 

### `public $DKIM_extraHeaders = []`

DKIM Extra signing headers.

 * **Example:** ['List-Unsubscribe', 'List-Help']

     <p>
 * **Type:** `array` — 

### `public $DKIM_private = ''`

DKIM private key file path.

 * **Type:** `string` — 

### `public $DKIM_private_string = ''`

DKIM private key string.

If set, takes precedence over `$DKIM_private`.

 * **Type:** `string` — 

### `public $action_function = ''`

Callback Action function name.

The function that handles the result of the send email action. It is called out by send() for each email sent.

Value can be any php callable: http://www.php.net/is_callable

Parameters: bool $result result of the send action array $to email addresses of the recipients array $cc cc email addresses array $bcc bcc email addresses string $subject the subject string $body the email body string $from email address of sender string $extra extra information of possible use "smtp_transaction_id' => last smtp transaction id

 * **Type:** `string` — 

### `public $XMailer = ''`

What to put in the X-Mailer header. Options: An empty string for PHPMailer default, whitespace for none, or a string to use.

 * **Type:** `string` — 

### `public static $validator = 'php'`

Which validator to use by default when validating email addresses. May be a callable to inject your own validator, but there are several built-in validators. The default validator uses PHP's FILTER_VALIDATE_EMAIL filter_var option.

 * **See also:** PHPMailer::validateAddress()

     <p>
 * **Type:** `string|callable` — 

### `protected $smtp`

An instance of the SMTP sender class.

 * **Type:** `SMTP` — 

### `protected $to = []`

The array of 'to' names and addresses.

 * **Type:** `array` — 

### `protected $cc = []`

The array of 'cc' names and addresses.

 * **Type:** `array` — 

### `protected $bcc = []`

The array of 'bcc' names and addresses.

 * **Type:** `array` — 

### `protected $ReplyTo = []`

The array of reply-to names and addresses.

 * **Type:** `array` — 

### `protected $all_recipients = []`

An array of all kinds of addresses. Includes all of $to, $cc, $bcc.

 * **See also:**
   * PHPMailer::$to
   * PHPMailer::$cc
   * PHPMailer::$bcc

     <p>
 * **Type:** `array` — 

### `protected $RecipientsQueue = []`

An array of names and addresses queued for validation. In send(), valid and non duplicate entries are moved to $all_recipients and one of $to, $cc, or $bcc. This array is used only for addresses with IDN.

 * **See also:**
   * PHPMailer::$to
   * PHPMailer::$cc
   * PHPMailer::$bcc
   * PHPMailer::$all_recipients

     <p>
 * **Type:** `array` — 

### `protected $ReplyToQueue = []`

An array of reply-to names and addresses queued for validation. In send(), valid and non duplicate entries are moved to $ReplyTo. This array is used only for addresses with IDN.

 * **See also:** PHPMailer::$ReplyTo

     <p>
 * **Type:** `array` — 

### `protected $attachment = []`

The array of attachments.

 * **Type:** `array` — 

### `protected $CustomHeader = []`

The array of custom headers.

 * **Type:** `array` — 

### `protected $lastMessageID = ''`

The most recent Message-ID (including angular brackets).

 * **Type:** `string` — 

### `protected $message_type = ''`

The message's MIME type.

 * **Type:** `string` — 

### `protected $boundary = []`

The array of MIME boundary strings.

 * **Type:** `array` — 

### `protected $language = []`

The array of available languages.

 * **Type:** `array` — 

### `protected $error_count = 0`

The number of errors encountered.

 * **Type:** `int` — 

### `protected $sign_cert_file = ''`

The S/MIME certificate file path.

 * **Type:** `string` — 

### `protected $sign_key_file = ''`

The S/MIME key file path.

 * **Type:** `string` — 

### `protected $sign_extracerts_file = ''`

The optional S/MIME extra certificates ("CA Chain") file path.

 * **Type:** `string` — 

### `protected $sign_key_pass = ''`

The S/MIME password for the key. Used only if the key is encrypted.

 * **Type:** `string` — 

### `protected $exceptions = false`

Whether to throw exceptions for errors.

 * **Type:** `bool` — 

### `protected $uniqueid = ''`

Unique ID used for message ID and boundaries.

 * **Type:** `string` — 

### `const VERSION = '6.0.7'`

The PHPMailer Version number.

 * **Type:** `string` — 

### `const STOP_MESSAGE = 0`

Error severity: message only, continue processing.

 * **Type:** `int` — 

### `const STOP_CONTINUE = 1`

Error severity: message, likely ok to continue processing.

 * **Type:** `int` — 

### `const STOP_CRITICAL = 2`

Error severity: message, plus full stop, critical error reached.

 * **Type:** `int` — 

### `protected static $LE = "\r\n"`

SMTP RFC standard line ending.

 * **Type:** `string` — 

### `const MAX_LINE_LENGTH = 998`

The maximum line length allowed by RFC 2822 section 2.1.1.

 * **Type:** `int` — 

### `const STD_LINE_LENGTH = 76`

The lower maximum line length allowed by RFC 2822 section 2.1.1. This length does NOT include the line break 76 means that lines will be 77 or 78 chars depending on whether the line break format is LF or CRLF; both are valid.

 * **Type:** `int` — 

### `public function __construct($exceptions = null)`

Constructor.

 * **Parameters:** `$exceptions` — `bool` — Should we throw external exceptions?

### `public function __destruct()`

Destructor.

### `private function mailPassthru($to, $subject, $body, $header, $params)`

Call mail() in a safe_mode-aware fashion. Also, unless sendmail_path points to sendmail (or something that claims to be sendmail), don't pass params (not a perfect fix, but it will do).

 * **Parameters:**
   * `$to` — `string` — To
   * `$subject` — `string` — Subject
   * `$body` — `string` — Message Body
   * `$header` — `string` — Additional Header(s)
   * `$params` — `string|null` — Params

     <p>
 * **Returns:** `bool` — 

### `protected function edebug($str)`

Output debugging info via user-defined method. Only generates output if SMTP debug output is enabled (@see SMTP::$do_debug).

 * **See also:**
   * PHPMailer::$Debugoutput
   * PHPMailer::$SMTPDebug

     <p>
 * **Parameters:** `$str` — `string` — 

### `public function isHTML($isHtml = true)`

Sets message type to HTML or plain.

 * **Parameters:** `$isHtml` — `bool` — True for HTML mode

### `public function isSMTP()`

Send messages using SMTP.

### `public function isMail()`

Send messages using PHP's mail() function.

### `public function isSendmail()`

Send messages using $Sendmail.

### `public function isQmail()`

Send messages using qmail.

### `public function addAddress($address, $name = '')`

Add a "To" address.

 * **Parameters:**
   * `$address` — `string` — The email address to send to
   * `$name` — `string` — <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — true on success, false if address already used or invalid in some way

### `public function addCC($address, $name = '')`

Add a "CC" address.

 * **Parameters:**
   * `$address` — `string` — The email address to send to
   * `$name` — `string` — <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — true on success, false if address already used or invalid in some way

### `public function addBCC($address, $name = '')`

Add a "BCC" address.

 * **Parameters:**
   * `$address` — `string` — The email address to send to
   * `$name` — `string` — <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — true on success, false if address already used or invalid in some way

### `public function addReplyTo($address, $name = '')`

Add a "Reply-To" address.

 * **Parameters:**
   * `$address` — `string` — The email address to reply to
   * `$name` — `string` — <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — true on success, false if address already used or invalid in some way

### `protected function addOrEnqueueAnAddress($kind, $address, $name)`

Add an address to one of the recipient arrays or to the ReplyTo array. Because PHPMailer can't validate addresses with an IDN without knowing the PHPMailer::$CharSet (that can still be modified after calling this function), addition of such addresses is delayed until send(). Addresses that have been added already return false, but do not throw exceptions.

 * **Parameters:**
   * `$kind` — `string` — One of 'to', 'cc', 'bcc', or 'ReplyTo'
   * `$address` — `string` — The email address to send, resp. to reply to
   * `$name` — `string` — <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — true on success, false if address already used or invalid in some way

### `protected function addAnAddress($kind, $address, $name = '')`

Add an address to one of the recipient arrays or to the ReplyTo array. Addresses that have been added already return false, but do not throw exceptions.

 * **Parameters:**
   * `$kind` — `string` — One of 'to', 'cc', 'bcc', or 'ReplyTo'
   * `$address` — `string` — The email address to send, resp. to reply to
   * `$name` — `string` — <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — true on success, false if address already used or invalid in some way

### `public static function parseAddresses($addrstr, $useimap = true)`

Parse and validate a string containing one or more RFC822-style comma-separated email addresses of the form "display name <address>" into an array of name/address pairs. Uses the imap_rfc822_parse_adrlist function if the IMAP extension is available. Note that quotes in the name part are removed.

 * **See also:** http://www.andrew.cmu.edu/user/agreen1/testing/mrbs/web/Mail/RFC822.php A more careful implementation

     <p>
 * **Parameters:**
   * `$addrstr` — `string` — The address list string
   * `$useimap` — `bool` — Whether to use the IMAP extension to parse the list

     <p>
 * **Returns:** `array` — 

### `public function setFrom($address, $name = '', $auto = true)`

Set the From and FromName properties.

 * **Parameters:**
   * `$address` — `string` — 
   * `$name` — `string` — 
   * `$auto` — `bool` — Whether to also set the Sender address, defaults to true

     <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — 

### `public function getLastMessageID()`

Return the Message-ID header of the last email. Technically this is the value from the last time the headers were created, but it's also the message ID of the last sent message except in pathological cases.

 * **Returns:** `string` — 

### `public static function validateAddress($address, $patternselect = null)`

Check that a string looks like an email address. Validation patterns supported: * `auto` Pick best pattern automatically; * `pcre8` Use the squiloople.com pattern, requires PCRE > 8.0; * `pcre` Use old PCRE implementation; * `php` Use PHP built-in FILTER_VALIDATE_EMAIL; * `html5` Use the pattern given by the HTML5 spec for 'email' type form input elements. * `noregex` Don't use a regex: super fast, really dumb. Alternatively you may pass in a callable to inject your own validator, for example:

```php PHPMailer::validateAddress('user@example.com', function($address) { return (strpos($address, '@') !== false); }); ```

You can also set the PHPMailer::$validator static to a callable, allowing built-in methods to use your validator.

 * **Parameters:**
   * `$address` — `string` — The email address to check
   * `$patternselect` — `string|callable` — Which pattern to use

     <p>
 * **Returns:** `bool` — 

### `public static function idnSupported()`

Tells whether IDNs (Internationalized Domain Names) are supported or not. This requires the `intl` and `mbstring` PHP extensions.

 * **Returns:** `bool` — `true` if required functions for IDN support are present

### `public function punyencodeAddress($address)`

Converts IDN in given email address to its ASCII form, also known as punycode, if possible. Important: Address must be passed in same encoding as currently set in PHPMailer::$CharSet. This function silently returns unmodified address if: - No conversion is necessary (i.e. domain name is not an IDN, or is already in ASCII form) - Conversion to punycode is impossible (e.g. required PHP functions are not available) or fails for any reason (e.g. domain contains characters not allowed in an IDN).

 * **See also:** PHPMailer::$CharSet

     <p>
 * **Parameters:** `$address` — `string` — The email address to convert

     <p>
 * **Returns:** `string` — The encoded address in ASCII form

### `public function send()`

Create a message and send it. Uses the sending method specified by $Mailer.

 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — false on error - See the ErrorInfo property for details of the error

### `public function preSend()`

Prepare a message for sending.

 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — 

### `public function postSend()`

Actually send a message via the selected mechanism.

 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — 

### `protected function sendmailSend($header, $body)`

Send mail using the $Sendmail program.

 * **See also:** PHPMailer::$Sendmail

     <p>
 * **Parameters:**
   * `$header` — `string` — The message headers
   * `$body` — `string` — The message body

     <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — 

### `protected static function isShellSafe($string)`

Fix CVE-2016-10033 and CVE-2016-10045 by disallowing potentially unsafe shell characters. Note that escapeshellarg and escapeshellcmd are inadequate for our purposes, especially on Windows.

 * **See also:** https://github.com/PHPMailer/PHPMailer/issues/924 CVE-2016-10045 bug report

     <p>
 * **Parameters:** `$string` — `string` — The string to be validated

     <p>
 * **Returns:** `bool` — 

### `protected static function isPermittedPath($path)`

Check whether a file path is of a permitted type. Used to reject URLs and phar files from functions that access local file paths, such as addAttachment.

 * **Parameters:** `$path` — `string` — A relative or absolute path to a file

     <p>
 * **Returns:** `bool` — 

### `protected function mailSend($header, $body)`

Send mail using the PHP mail() function.

 * **See also:** http://www.php.net/manual/en/book.mail.php

     <p>
 * **Parameters:**
   * `$header` — `string` — The message headers
   * `$body` — `string` — The message body

     <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — 

### `public function getSMTPInstance()`

Get an instance to use for SMTP operations. Override this function to load your own SMTP implementation, or set one with setSMTPInstance.

 * **Returns:** `SMTP` — 

### `public function setSMTPInstance(SMTP $smtp)`

Provide an instance to use for SMTP operations.

 * **Parameters:** `$smtp` — `SMTP` — <p>
 * **Returns:** `SMTP` — 

### `protected function smtpSend($header, $body)`

Send mail via SMTP. Returns false if there is a bad MAIL FROM, RCPT, or DATA input.

 * **See also:** PHPMailer::setSMTPInstance() to use a different class.

     <p>
 * **Parameters:**
   * `$header` — `string` — The message headers
   * `$body` — `string` — The message body

     <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — 

### `public function smtpConnect($options = null)`

Initiate a connection to an SMTP server. Returns false if the operation failed.

 * **Parameters:** `$options` — `array` — An array of options compatible with stream_context_create()

     <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — 

### `public function smtpClose()`

Close the active SMTP session if one exists.

### `public function setLanguage($langcode = 'en', $lang_path = '')`

Set the language for error messages. Returns false if it cannot load the language file. The default language is English.

 * **Parameters:**
   * `$langcode` — `string` — ISO 639-1 2-character language code (e.g. French is "fr")
   * `$lang_path` — `string` — Path to the language file directory, with trailing separator (slash)

     <p>
 * **Returns:** `bool` — 

### `public function getTranslations()`

Get the array of strings for the current language.

 * **Returns:** `array` — 

### `public function addrAppend($type, $addr)`

Create recipient headers.

 * **Parameters:**
   * `$type` — `string` — 
   * `$addr` — `array` — An array of recipients,

     where each recipient is a 2-element indexed array with element 0 containing an address

     and element 1 containing a name, like:

     [['joe@example.com', 'Joe User'], ['zoe@example.com', 'Zoe User']]

     <p>
 * **Returns:** `string` — 

### `public function addrFormat($addr)`

Format an address for use in a message header.

 * **Parameters:** `$addr` — `array` — A 2-element indexed array, element 0 containing an address, element 1 containing a name like

     ['joe@example.com', 'Joe User']

     <p>
 * **Returns:** `string` — 

### `public function wrapText($message, $length, $qp_mode = false)`

Word-wrap message. For use with mailers that do not automatically perform wrapping and for quoted-printable encoded messages. Original written by philippe.

 * **Parameters:**
   * `$message` — `string` — The message to wrap
   * `$length` — `int` — The line length to wrap to
   * `$qp_mode` — `bool` — Whether to run in Quoted-Printable mode

     <p>
 * **Returns:** `string` — 

### `public function utf8CharBoundary($encodedText, $maxLength)`

Find the last character boundary prior to $maxLength in a utf-8 quoted-printable encoded string. Original written by Colin Brown.

 * **Parameters:**
   * `$encodedText` — `string` — utf-8 QP text
   * `$maxLength` — `int` — Find the last character boundary prior to this length

     <p>
 * **Returns:** `int` — 

### `public function setWordWrap()`

Apply word wrapping to the message body. Wraps the message body to the number of chars set in the WordWrap property. You should only do this to plain-text bodies as wrapping HTML tags may break them. This is called automatically by createBody(), so you don't need to call it yourself.

### `public function createHeader()`

Assemble message headers.

 * **Returns:** `string` — The assembled headers

### `public function getMailMIME()`

Get the message MIME type headers.

 * **Returns:** `string` — 

### `public function getSentMIMEMessage()`

Returns the whole MIME message. Includes complete headers and body. Only valid post preSend().

 * **See also:** PHPMailer::preSend()

     <p>
 * **Returns:** `string` — 

### `protected function generateId()`

Create a unique ID to use for boundaries.

 * **Returns:** `string` — 

### `public function createBody()`

Assemble the message body. Returns an empty string on failure.

 * **Exceptions:** `Exception` — <p>
 * **Returns:** `string` — The assembled message body

### `protected function getBoundary($boundary, $charSet, $contentType, $encoding)`

Return the start of a message boundary.

 * **Parameters:**
   * `$boundary` — `string` — 
   * `$charSet` — `string` — 
   * `$contentType` — `string` — 
   * `$encoding` — `string` — <p>
 * **Returns:** `string` — 

### `protected function endBoundary($boundary)`

Return the end of a message boundary.

 * **Parameters:** `$boundary` — `string` — <p>
 * **Returns:** `string` — 

### `protected function setMessageType()`

Set the message type. PHPMailer only supports some preset message types, not arbitrary MIME structures.

### `public function headerLine($name, $value)`

Format a header line.

 * **Parameters:**
   * `$name` — `string` — 
   * `$value` — `string|int` — <p>
 * **Returns:** `string` — 

### `public function textLine($value)`

Return a formatted mail line.

 * **Parameters:** `$value` — `string` — <p>
 * **Returns:** `string` — 

### `public function addAttachment($path, $name = '', $encoding = self::ENCODING_BASE64, $type = '', $disposition = 'attachment')`

Add an attachment from a path on the filesystem. Never use a user-supplied path to a file! Returns false if the file could not be found or read. Explicitly *does not* support passing URLs; PHPMailer is not an HTTP client. If you need to do that, fetch the resource yourself and pass it in via a local file or string.

 * **Parameters:**
   * `$path` — `string` — Path to the attachment
   * `$name` — `string` — Overrides the attachment name
   * `$encoding` — `string` — File encoding (see $Encoding)
   * `$type` — `string` — File extension (MIME) type
   * `$disposition` — `string` — Disposition to use

     <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `bool` — 

### `public function getAttachments()`

Return the array of attachments.

 * **Returns:** `array` — 

### `protected function attachAll($disposition_type, $boundary)`

Attach all file, string, and binary attachments to the message. Returns an empty string on failure.

 * **Parameters:**
   * `$disposition_type` — `string` — 
   * `$boundary` — `string` — <p>
 * **Returns:** `string` — 

### `protected function encodeFile($path, $encoding = self::ENCODING_BASE64)`

Encode a file attachment in requested format. Returns an empty string on failure.

 * **Parameters:**
   * `$path` — `string` — The full path to the file
   * `$encoding` — `string` — The encoding to use; one of 'base64', '7bit', '8bit', 'binary', 'quoted-printable'

     <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `string` — 

### `public function encodeString($str, $encoding = self::ENCODING_BASE64)`

Encode a string in requested format. Returns an empty string on failure.

 * **Parameters:**
   * `$str` — `string` — The text to encode
   * `$encoding` — `string` — The encoding to use; one of 'base64', '7bit', '8bit', 'binary', 'quoted-printable'

     <p>
 * **Returns:** `string` — 

### `public function encodeHeader($str, $position = 'text')`

Encode a header value (not including its label) optimally. Picks shortest of Q, B, or none. Result includes folding if needed. See RFC822 definitions for phrase, comment and text positions.

 * **Parameters:**
   * `$str` — `string` — The header value to encode
   * `$position` — `string` — What context the string will be used in

     <p>
 * **Returns:** `string` — 

### `public function hasMultiBytes($str)`

Check if a string contains multi-byte characters.

 * **Parameters:** `$str` — `string` — multi-byte text to wrap encode

     <p>
 * **Returns:** `bool` — 

### `public function has8bitChars($text)`

Does a string contain any 8-bit chars (in any charset)?

 * **Parameters:** `$text` — `string` — <p>
 * **Returns:** `bool` — 

### `public function base64EncodeWrapMB($str, $linebreak = null)`

Encode and wrap long multibyte strings for mail headers without breaking lines within a character. Adapted from a function by paravoid.

 * **See also:** http://www.php.net/manual/en/function.mb-encode-mimeheader.php#60283

     <p>
 * **Parameters:**
   * `$str` — `string` — multi-byte text to wrap encode
   * `$linebreak` — `string` — string to use as linefeed/end-of-line

     <p>
 * **Returns:** `string` — 

### `public function encodeQP($string)`

Encode a string in quoted-printable format. According to RFC2045 section 6.7.

 * **Parameters:** `$string` — `string` — The text to encode

     <p>
 * **Returns:** `string` — 

### `public function encodeQ($str, $position = 'text')`

Encode a string using Q encoding.

 * **See also:** http://tools.ietf.org/html/rfc2047#section-4.2

     <p>
 * **Parameters:**
   * `$str` — `string` — the text to encode
   * `$position` — `string` — Where the text is going to be used, see the RFC for what that means

     <p>
 * **Returns:** `string` — 

### `$pattern = '\000-\011\013\014\016-\037\075\077\137\177-\377' . $pattern`


### `public function addStringAttachment(  $string,  $filename,  $encoding = self::ENCODING_BASE64,  $type = '',  $disposition = 'attachment'  )`

Add a string or binary attachment (non-filesystem). This method can be used to attach ascii or binary data, such as a BLOB record from a database.

 * **Parameters:**
   * `$string` — `string` — String attachment data
   * `$filename` — `string` — Name of the attachment
   * `$encoding` — `string` — File encoding (see $Encoding)
   * `$type` — `string` — File extension (MIME) type
   * `$disposition` — `string` — Disposition to use

### `public function addEmbeddedImage($path, $cid, $name = '', $encoding = self::ENCODING_BASE64, $type = '', $disposition = 'inline')`

Add an embedded (inline) attachment from a file. This can include images, sounds, and just about any other document type. These differ from 'regular' attachments in that they are intended to be displayed inline with the message, not just attached for download. This is used in HTML messages that embed the images the HTML refers to using the $cid value. Never use a user-supplied path to a file!

 * **Parameters:**
   * `$path` — `string` — Path to the attachment
   * `$cid` — `string` — Content ID of the attachment; Use this to reference

     the content when using an embedded image in HTML
   * `$name` — `string` — Overrides the attachment name
   * `$encoding` — `string` — File encoding (see $Encoding)
   * `$type` — `string` — File MIME type
   * `$disposition` — `string` — Disposition to use

     <p>
 * **Returns:** `bool` — True on successfully adding an attachment

### `public function addStringEmbeddedImage(  $string,  $cid,  $name = '',  $encoding = self::ENCODING_BASE64,  $type = '',  $disposition = 'inline'  )`

Add an embedded stringified attachment. This can include images, sounds, and just about any other document type. If your filename doesn't contain an extension, be sure to set the $type to an appropriate MIME type.

 * **Parameters:**
   * `$string` — `string` — The attachment binary data
   * `$cid` — `string` — Content ID of the attachment; Use this to reference

     the content when using an embedded image in HTML
   * `$name` — `string` — A filename for the attachment. If this contains an extension,

     PHPMailer will attempt to set a MIME type for the attachment.

     For example 'file.jpg' would get an 'image/jpeg' MIME type.
   * `$encoding` — `string` — File encoding (see $Encoding), defaults to 'base64'
   * `$type` — `string` — MIME type - will be used in preference to any automatically derived type
   * `$disposition` — `string` — Disposition to use

     <p>
 * **Returns:** `bool` — True on successfully adding an attachment

### `protected function cidExists($cid)`

Check if an embedded attachment is present with this cid.

 * **Parameters:** `$cid` — `string` — <p>
 * **Returns:** `bool` — 

### `public function inlineImageExists()`

Check if an inline attachment is present.

 * **Returns:** `bool` — 

### `public function attachmentExists()`

Check if an attachment (non-inline) is present.

 * **Returns:** `bool` — 

### `public function alternativeExists()`

Check if this message has an alternative body set.

 * **Returns:** `bool` — 

### `public function clearQueuedAddresses($kind)`

Clear queued addresses of given kind.

 * **Parameters:** `$kind` — `string` — 'to', 'cc', or 'bcc'

### `public function clearAddresses()`

Clear all To recipients.

### `public function clearCCs()`

Clear all CC recipients.

### `public function clearBCCs()`

Clear all BCC recipients.

### `public function clearReplyTos()`

Clear all ReplyTo recipients.

### `public function clearAllRecipients()`

Clear all recipient types.

### `public function clearAttachments()`

Clear all filesystem, string, and binary attachments.

### `public function clearCustomHeaders()`

Clear all custom headers.

### `protected function setError($msg)`

Add an error message to the error container.

 * **Parameters:** `$msg` — `string` — 

### `public static function rfcDate()`

Return an RFC 822 formatted date.

 * **Returns:** `string` — 

### `protected function serverHostname()`

Get the server hostname. Returns 'localhost.localdomain' if unknown.

 * **Returns:** `string` — 

### `public static function isValidHost($host)`

Validate whether a string contains a valid value to use as a hostname or IP address. IPv6 addresses must include [], e.g. `[::1]`, not just `::1`.

 * **Parameters:** `$host` — `string` — The host name or IP address to check

     <p>
 * **Returns:** `bool` — 

### `protected function lang($key)`

Get an error message in the current language.

 * **Parameters:** `$key` — `string` — <p>
 * **Returns:** `string` — 

### `public function isError()`

Check if an error occurred.

 * **Returns:** `bool` — True if an error did occur

### `public function addCustomHeader($name, $value = null)`

Add a custom header. $name value can be overloaded to contain both header name and value (name:value).

 * **Parameters:**
   * `$name` — `string` — Custom header name
   * `$value` — `string|null` — Header value

### `public function getCustomHeaders()`

Returns all custom headers.

 * **Returns:** `array` — 

### `public function msgHTML($message, $basedir = '', $advanced = false)`

Create a message body from an HTML string. Automatically inlines images and creates a plain-text version by converting the HTML, overwriting any existing values in Body and AltBody. Do not source $message content from user input! $basedir is prepended when handling relative URLs, e.g. <img src="/images/a.png"> and must not be empty will look for an image file in $basedir/images/a.png and convert it to inline. If you don't provide a $basedir, relative paths will be left untouched (and thus probably break in email) Converts data-uri images into embedded attachments. If you don't want to apply these transformations to your HTML, just set Body and AltBody directly.

 * **Parameters:**
   * `$message` — `string` — HTML message string
   * `$basedir` — `string` — Absolute path to a base directory to prepend to relative paths to images
   * `$advanced` — `bool|callable` — Whether to use the internal HTML to text converter

     or your own custom converter @see PHPMailer::html2text()

     <p>
 * **Returns:** `string` — $message The transformed message Body

### `public function html2text($html, $advanced = false)`

Convert an HTML string into plain text. This is used by msgHTML(). Note - older versions of this function used a bundled advanced converter which was removed for license reasons in #232. Example usage:

```php // Use default conversion $plain = $mail->html2text($html); // Use your own custom converter $plain = $mail->html2text($html, function($html) { $converter = new MyHtml2text($html); return $converter->get_text(); }); ```

 * **Parameters:**
   * `$html` — `string` — The HTML text to convert
   * `$advanced` — `bool|callable` — Any boolean value to use the internal converter,

     or provide your own callable for custom conversion

     <p>
 * **Returns:** `string` — 

### `public static function _mime_types($ext = '')`

Get the MIME type for a file extension.

 * **Parameters:** `$ext` — `string` — File extension

     <p>
 * **Returns:** `string` — MIME type of file

### `public static function filenameToType($filename)`

Map a file name to a MIME type. Defaults to 'application/octet-stream', i.e.. arbitrary binary data.

 * **Parameters:** `$filename` — `string` — A file name or full path, does not need to exist as a file

     <p>
 * **Returns:** `string` — 

### `public static function mb_pathinfo($path, $options = null)`

Multi-byte-safe pathinfo replacement. Drop-in replacement for pathinfo(), but multibyte- and cross-platform-safe.

 * **See also:** http://www.php.net/manual/en/function.pathinfo.php#107461

     <p>
 * **Parameters:**
   * `$path` — `string` — A filename or path, does not need to exist as a file
   * `$options` — `int|string` — Either a PATHINFO_* constant,

     or a string name to return only the specified piece

     <p>
 * **Returns:** `string|array` — 

### `public function set($name, $value = '')`

Set or reset instance properties. You should avoid this function - it's more verbose, less efficient, more error-prone and harder to debug than setting properties directly. Usage Example: `$mail->set('SMTPSecure', 'tls');` is the same as: `$mail->SMTPSecure = 'tls';`.

 * **Parameters:**
   * `$name` — `string` — The property name to set
   * `$value` — `mixed` — The value to set the property to

     <p>
 * **Returns:** `bool` — 

### `public function secureHeader($str)`

Strip newlines to prevent header injection.

 * **Parameters:** `$str` — `string` — <p>
 * **Returns:** `string` — 

### `public static function normalizeBreaks($text, $breaktype = null)`

Normalize line breaks in a string. Converts UNIX LF, Mac CR and Windows CRLF line breaks into a single line break format. Defaults to CRLF (for message bodies) and preserves consecutive breaks.

 * **Parameters:**
   * `$text` — `string` — 
   * `$breaktype` — `string` — What kind of line break to use; defaults to static::$LE

     <p>
 * **Returns:** `string` — 

### `public static function getLE()`

Return the current line break format string.

 * **Returns:** `string` — 

### `protected static function setLE($le)`

Set the line break format string, e.g. "\r\n".

 * **Parameters:** `$le` — `string` — 

### `public function sign($cert_filename, $key_filename, $key_pass, $extracerts_filename = '')`

Set the public and private key files and password for S/MIME signing.

 * **Parameters:**
   * `$cert_filename` — `string` — 
   * `$key_filename` — `string` — 
   * `$key_pass` — `string` — Password for private key
   * `$extracerts_filename` — `string` — Optional path to chain certificate

### `public function DKIM_QP($txt)`

Quoted-Printable-encode a DKIM header.

 * **Parameters:** `$txt` — `string` — <p>
 * **Returns:** `string` — 

### `public function DKIM_Sign($signHeader)`

Generate a DKIM signature.

 * **Parameters:** `$signHeader` — `string` — <p>
 * **Exceptions:** `Exception` — <p>
 * **Returns:** `string` — The DKIM signature value

### `public function DKIM_HeaderC($signHeader)`

Generate a DKIM canonicalization header. Uses the 'relaxed' algorithm from RFC6376 section 3.4.2. Canonicalized headers should *always* use CRLF, regardless of mailer setting.

 * **See also:** https://tools.ietf.org/html/rfc6376#section-3.4.2

     <p>
 * **Parameters:** `$signHeader` — `string` — Header

     <p>
 * **Returns:** `string` — 

### `public function DKIM_BodyC($body)`

Generate a DKIM canonicalization body. Uses the 'simple' algorithm from RFC6376 section 3.4.3. Canonicalized bodies should *always* use CRLF, regardless of mailer setting.

 * **See also:** https://tools.ietf.org/html/rfc6376#section-3.4.3

     <p>
 * **Parameters:** `$body` — `string` — Message Body

     <p>
 * **Returns:** `string` — 

### `public function DKIM_Add($headers_line, $subject, $body)`

Create the DKIM header and body in a new message header.

 * **Parameters:**
   * `$headers_line` — `string` — Header lines
   * `$subject` — `string` — Subject
   * `$body` — `string` — Body

     <p>
 * **Returns:** `string` — 

### `public static function hasLineLongerThanMax($str)`

Detect if a string contains a line longer than the maximum line length allowed by RFC 2822 section 2.1.1.

 * **Parameters:** `$str` — `string` — <p>
 * **Returns:** `bool` — 

### `public function getToAddresses()`

Allows for public read access to 'to' property. Before the send() call, queued addresses (i.e. with IDN) are not yet included.

 * **Returns:** `array` — 

### `public function getCcAddresses()`

Allows for public read access to 'cc' property. Before the send() call, queued addresses (i.e. with IDN) are not yet included.

 * **Returns:** `array` — 

### `public function getBccAddresses()`

Allows for public read access to 'bcc' property. Before the send() call, queued addresses (i.e. with IDN) are not yet included.

 * **Returns:** `array` — 

### `public function getReplyToAddresses()`

Allows for public read access to 'ReplyTo' property. Before the send() call, queued addresses (i.e. with IDN) are not yet included.

 * **Returns:** `array` — 

### `public function getAllRecipientAddresses()`

Allows for public read access to 'all_recipients' property. Before the send() call, queued addresses (i.e. with IDN) are not yet included.

 * **Returns:** `array` — 

### `protected function doCallback($isSent, $to, $cc, $bcc, $subject, $body, $from, $extra)`

Perform a callback.

 * **Parameters:**
   * `$isSent` — `bool` — 
   * `$to` — `array` — 
   * `$cc` — `array` — 
   * `$bcc` — `array` — 
   * `$subject` — `string` — 
   * `$body` — `string` — 
   * `$from` — `string` — 
   * `$extra` — `array` — 

### `public function getOAuth()`

Get the OAuth instance.

 * **Returns:** `OAuth` — 

### `public function setOAuth(OAuth $oauth)`

Set an OAuth instance.

 * **Parameters:** `$oauth` — `OAuth` — 
