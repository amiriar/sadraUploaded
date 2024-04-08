-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 16, 2024 at 02:21 PM
-- Server version: 10.6.16-MariaDB-cll-lve
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sadraeducom_sadra-db-core`
--
CREATE DATABASE IF NOT EXISTS `sadraeducom_sadra-db-core` DEFAULT CHARACTER SET utf32 COLLATE utf32_persian_ci;
USE `sadraeducom_sadra-db-core`;

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `imageData` mediumtext NOT NULL,
  `date` mediumtext NOT NULL,
  `title` mediumtext NOT NULL,
  `description` mediumtext NOT NULL,
  `authorName` mediumtext NOT NULL,
  `authorLastName` mediumtext NOT NULL,
  `hashtags` mediumtext NOT NULL,
  `detailsDescription1` mediumtext NOT NULL,
  `detailsDescription2` mediumtext NOT NULL,
  `detailsDescription3` mediumtext NOT NULL,
  `descriptionImage1` mediumtext NOT NULL,
  `descriptionImage2` mediumtext NOT NULL,
  `detailsDescription4` mediumtext NOT NULL,
  `detailsDescription5` mediumtext NOT NULL,
  `timeToRead` mediumtext NOT NULL,
  `isShown` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `imageData`, `date`, `title`, `description`, `authorName`, `authorLastName`, `hashtags`, `detailsDescription1`, `detailsDescription2`, `detailsDescription3`, `descriptionImage1`, `descriptionImage2`, `detailsDescription4`, `detailsDescription5`, `timeToRead`, `isShown`) VALUES
(67, '../public_html/assets/uploads/bcc00d22-487e-4b16-adfa-8d3a3b34d871.png', '1402-12-19', 'شبکه و زیر ساخت', 'زیر ساخت شبکه چیست؟', 'حسین', 'اشرفی پور', 'شبکه , تکنولوژی , زیر_ساخت , سخت_افزار', 'منظور از زیر ساخت شبکه مجموعه موراد و اقداماتی است که باعث می‌شود یک شبکه به صورت عالی و بدون مشکل به کارکرد خود ادامه دهد، در حالت کلی می‌توان گفت که زیر ساخت شبکه همان موارد است که اگر نباشند، یک شبکه نمی‌تواند کارکرد مناسبی را تجربه کند. در تعریف زیر ساخت شبکه می‌توان گفت که زیر ساخت شبکه همان سخت افزار و طراحی‌هایی است که باعث می‌شود خدمات شبکه بر بستر این زیر ساخت اجرا و پیاده سازی شود.\nمتخصص شبکه در طراحی پیاده سازی خدمات اکتیو شبکه و خدمات پسیو شبکه در هر دو حالت نیاز به یک زیر ساخت برای اجرا کردن این دو مورد دارد. توجه داشته باشید استفاده از یو پی اس در شبکه می‌تواند پایداری شبکه را به میزان قابل توجه‌ای افزایش دهد.\nتوجه به امنیت زیر ساخت شبکه از جمله موارد است که توجه به آن می‌تواند کارکرد سیستم شبکه شما را بدون هیچ ریسک و مشکلی به اجرا بگذارد', 'کار زیر ساخت شبکه چیست؟ کار اصلی زیر ساخت شبکه در اصل، ایجاد کردن بستر مناسب و حرفه‌ای برای توسعه یک شبکه بدون مشکل است. در یک زیر ساخت شبکه مناسب و حرفه‌ای آنچه که بیش از همه اهمیت دارد، روند کاری زیر ساخت شبکه است. هر چه کارکرد زیر ساخت شبکه بهتر و اصولی‌تر باشد، آن شبکه توانایی ارائه خدمات بهتر و مناسب‌تر را خواهد داشت. به نوعی می‌توان گفت که زیر ساخت شبکه‌های کامپیوتری از جمله مواردی است که نیاز اولیه هر شبکه است. هر چه زیر ساخت شبکه و سخت افزار مورد استفاده بهتر و اصولی‌تر طراحی و پیاده سازی شود خدمات بهتری را خواهید توانست مورد استفاده قرار دهید', 'بخش‌های مربوط به زیرساخت منطقی شبکه : شناختن زیرساخت فیزیکی در شبکه به دلیل اینکه ماهیت فیزیکی دارند و سخت افزاری هستند جایگاه هر کدام از آنها به راحتی قابل انجام است. زیرساخت منطقی شبکه وابسته به بخش‌های مختلفی خواهد بود. معرفی هربخش از زیرساخت‌ها به شرح زیر خواهد بود که تک به تک به آنها خواهیم پرداخت.\nدر مقاله انواع vlan بندی شبکه در رابطه با بخش‌هایی که یک پسیو کار شبکه و یا اکتیو کار شبکه باید به آن توجه داشته باشد، مطالبی را بیان کرده‌ایم.\nپروتکل شبکه\nاین قسمت یکی از بخش‌های مهم در ایجاد زیرساخت شبکه کامپیوتری به حساب می آید. کامپیوتر‌های داخل شبکه  بر اساس پروتکل‌های از پیش تعریف شده قادرخواهند بود با یکدیگر ارتباط برقرار کنند این پروتکل تشکیل شده از مجموعه ای قوانین کلی یا مجموعه‌های روتین قابل استفاده در شبکه هستند که سیستم از آن‌ها برای ارسال اطلاعات و داده‌ها بهره می برد\n', '../public_html/assets/uploads/27ce3423-0c98-427c-95b4-bb1467796a89.jpg', '../public_html/assets/uploads/7d8b0de4-afe5-4112-b3e3-b2e0103db112.webp', 'مدل‌های شبکه : باید بعضی از مدل‌های مرسوم شبکه که معماری کلی شبکه را تشریح می‌کنند آشنا شوید؛ مدل (OSI  (Open systems Interconnection به عنوان یکی از مراجع در این زمینه قابل توجه است.\nدر مدل بالا از هفت لایه مختلف برای شرح فرایند‌های مربوط به ارتباطات استفاده می شود.در واقع هرکدام از لایه‌ها مسئولیت انجام فرایند خاصی را به عهده دارند و ملاک و شاخص اصلی تقسیم بندی بر پایه عملیات مربوطه ای که باید در هر لایه صورت پذیرد.\nمدل OSI  به عنوان یک مرجع کلی برای شناخت عملیات وابسته به ارتباطات استفاده می شود. در بخش پیاده سازی خیلی از پروتکل‌ها به صورت کامل از OSI  تبعیت نمی‌کنند اما برای آغاز و آشنایی با عملکرد یک شبکه پس از ارسال اطلاعات مدل بالا تاثیر گذار خواهد بود.\nارسال و دریافت از مسیر لایه‌های مربوط در سیستم‌های فرستنده و گیرنده انجام می‌پذیرد. داده‌ها توسط یک برنامه و گاهی توسط کاربر تولید می شوند مانند یک پیام الکترونیکی. آغاز ارسال داده‌ها از لایه نرم افزار و در ادامه با حرکت به سمت پایین در هر بخش عملیات مربوطه انجام می شود و اطلاعات به بسته‌های اطلاعاتی قبلی اضافه می شوند', '', '81', 1),
(68, '../public_html/assets/uploads/4a1bf827-4cb6-4784-9947-3c57d3c55435.webp', '1402-12-19', 'مجازی سازی', 'مجازی‌سازی یکی از جدیدترین اصطلاحات صنعت فناوری اطلاعات است که در سال‌های اخیر بسیاری از افراد و کسب‌وکارها با کاربردهای مختلف آن سروکار دارند. یکی از ابتدایی‌ترین و کلی‌ترین تعاریفی که ممکن است از این عبارت شنیده باشید، اجرای یک یا چند سیستم عامل مهمان بر روی یک هاست است', 'حسین', 'اشرفی پور', 'شبکه , تکنولوژی , زیر_ساخت , سخت_افزار', 'مجازی‌سازی چیست؟ به زبان ساده، مجازی سازی را می‌توان ایجاد یک نسخه مجازی از هر چیزی تعریف کرد. مجازی‌سازی، ایده و راهکاری خلاقانه و بسیار کاربردی برای ایجاد یک نسخه مجازی از دستگاه‌های ذخیره‌سازی، سرورها، شبکه‌ها و سایر منابعی است که زمانی تنها به شکل فیزیکی در دسترس کاربران قرار داشتند.\nاین فناوری از نرم‌افزارهایی برای شبیه‌سازی عملکرد سخت‌افزار و ایجاد یک سیستم مجازی بهره می‌گیرد. به ‌این ‌ترتیب، ماهیت و ویژگی‌های فیزیکی منابع محاسباتی از دید کاربران پنهان شده و ضمن ایجاد یک یا چند منبع مجازی، امکان استفاده کارآمدتر از منابع سخت‌افزاری فراهم می‌شود\n', 'اصطلاحات کاربردی در مجازی سازی : \nهایپروایزرها (Hypervisor)\nعنصر اصلی در پیاده‌سازی مجازی سازی، هایپروایزر است. هایپروایزر (Hypervisor) یک لایه نرم‌افزاری است که با نصب روی سخت‌افزار، امکان راه‌اندازی ماشین‌های مجازی را فراهم می‌کند. در واقع این نرم‌افزار، به‌عنوان رابطی میان ماشین مجازی (VM) و سخت‌افزار فیزیکی زیرساختی عمل کرده و اشتراک منابع فیزیکی را مدیریت می‌کند. همچنین هایپروایزر تضمین می‌کند که عملکرد ماشین‌های مجازی، با تأثیر گذاشتن بر حافظه یا چرخه‌های محاسباتی، با یکدیگر تداخل نداشته باشند.\nبه ‌طور کلی، دو نوع هایپروایزر وجود دارد:\nهایپروایزر نوع 1 که با عنوان «Bare-metal» شناخته می‌شود. این نوع hypervisor با منابع فیزیکی زیرساختی مانند سرور، حافظه، فضای ذخیره‌سازی و… در تعامل است و می‌تواند مانند سیستم‌ عامل‌های (OS) سنتی رفتار کند. استفاده از این هایپروایزر بیشتر در مجازی‌سازی سرور مشاهده می‌شود.\nهایپروایزرهای نوع 2 را می‌توان یک برنامه کاربردی برای اجرا در سیستم‌عامل‌های موجود و دستگاه‌های endpoint دانست. این نوع از هایپروایزر، سیستم‌عامل‌های جایگزین را روی سیستم کاربر نهایی اجرا کرده و از OS میزبان برای دسترسی به منابع زیرساختی سخت‌افزاری و هماهنگ کردن عملکرد آن‌ها بهره می‌گیرد؛ بنابراین کارایی بالا و عملکرد بهینه‌ای دارد.\n', ' VMماشین مجازی (Virtual Machine)، یک محیط‌ مجازی است که به شبیه‌سازی یک سیستم فیزیکی، در قالب نرم‌افزار می‌پردازد. بنابراین، VM را می‌توان برنامه‌ای معرفی کرد که روی یک سیستم‌عامل اجرا می‌شود و از این طریق، یک کامپیوتر مجازی را در اختیار کاربران قرار می‌دهد. این ماشین مجازی ماهیت فیزیکی خود را پنهان می‌کند اما تمام منابع مورد نیاز برای یک کامپیوتر کامل را به کاربران خود ارائه می‌دهد. به ‌این‌ ترتیب، سیستم‌عامل میزبان به دریچه‌ای برای استفاده از منابع فیزیکی یک سخت‌افزار بزرگ‌تر تبدیل می‌شود.\n', '../public_html/assets/uploads/cf263789-6e3c-4ac6-8916-bdd9845a71e0.png', '../public_html/assets/uploads/830bcbfc-c907-4023-b13b-c5f57cecbcbb.jpg', 'ماشین میزبان (Host Machine) : ماشین میزبانیک دستگاه فیزیکی است که  مجازی‌سازی در آن اتفاق می‌افتد. در واقع این ماشین، میزبان یک یا چند ماشین مجازی است و اجزای فیزیکی آن مانند حافظه و اجزای ذخیره‌سازی و پردازش، در نهایت وظیفه برطرف ساختن نیازهای ماشین‌های مجازی را بر عهده دارند؛ این منابع عمدتا از دید ماشین‌های مجازی پنهان هستند. بنابراین نرم‌افزارهای مجازی سازی مانند هایپروایزرها روی این دستگاه نصب و راه‌اندازی می‌شوند\n', '', '80', 1),
(69, '../public_html/assets/uploads/73162653-c3ac-4fbc-b41d-0d4e20d7e985.jpg', '1402-12-19', ' برنامه نویسی', ' برنامه نویسی چیست و چه کاربردی دارد ؟', 'حسین', 'اشرفی پور', 'شبکه , تکنولوژی , برنامه_نویسی , کامپیوتر', 'به بیان ساده، اساساً برنامه نویسی اقدامی برای به‌کارگیری کامپیوتر جهت انجام یک وظیفه مشخص است که این وظیفه باید بدون خطا و به‌درستی انجام شود\n. برای درک بهتر مفهوم برنامه نویسی بهتر است در ادامه مثالی ساده ارائه شود.\n', 'زبان برنامه نویسی چیست ؟\nزبان‌های برنامه نویسی اساساً برای ترجمه یک برنامه به کدهای ماشین به مانند یک واسط عمل می‌کنند. یادگیری زبان‌های برنامه نویسی نسبت به یادگیری کدهای صفر و یک ماشین بسیار ساده‌ترند و بنابراین برای برنامه نویسان بسیار مفید و کاربردی هستند.\nانواع زبان‌های برنامه نویسی بسیاری وجود دارند که هر کدام دارای کاربرد مخصوص به خود هستند. زبان‌های برنامه نویسی مثل پایتون و جاوا زبان‌هایی همه‌منظوره هستند که می‌توان به وسیله آن‌ها وظایف محاسباتی گوناگونی را اجرا کرد. همچنین، زبان‌هایی مثل HTML ،Robot C یا CSS زبان‌هایی هستند که برای مقاصد خاصی مثل راهبری ربات‌های هوشمند یا ساخت وب سایت‌ها طراحی شده‌اند. علاوه بر این، زبان‌های برنامه نویسی معمولاً در خصوص میزان قدرتمندی هم با یکدیگر متفاوت هستند.\nبرای مثال، جاوا اسکریپت یک زبان اسکریپتی به حساب می‌آید که برای انجام وظایف کوچک‌تر طراحی شده است. اما جاوا و پایتون می‌توانند به لحاظ محاسباتی پردازش‌های بسیار پیچیده‌تری را اجرا کنند. می‌توان میزان قدرتمندی و «سطح» یک زبان برنامه نویسی را به وسیله سنجش میزان شباهت آن زبان به کدهای ماشین اندازه‌گیری کرد. زبان‌های سطح پایین مثل زبان اسمبلی یا C، نسبت به یک زبان سطح بالا مثل جاوا یا پایتون به کدهای باینری بسیار نزدیک‌ترند. جالب است بدانید زبان‌های برنامه نویسی نیز داریم که به نوعی بهترین زبان برنامه نویسی برای کودکان هستند و با هدف آموزش این مهارت به قشر کودک و نوجوان طراحی شده‌اند\nایده اساسی این است که هر چه سطح یک زبان برنامه نویسی پایین‌تر باشد، کدهای آن زبان شباهت بیش‌تری به زبان ماشین دارند\n', ' در اینجا به سراغ یک مثال ساده می‌رویم که درک بهتری از اینکه برنامه‌نویسی چیست فراهم می‌کند. برای مثال فرض می‌شود که شخصی با سطح هوشمندی کم‌تر از باهوش می‌خواهد یک اسباب‌بازی لِگو (Lego) را بسازد. این شخص دفترچه راهنمای ساخت لگو را در اختیار ندارد و تنها می‌تواند بر اساس دستورات شما ساخت لگو را انجام دهد. باید به یاد داشت که این شخص فاقد هوشمندی است و در صورتی که دستورالعمل‌های دقیق و مشخصی را در خصوص نحوه ساخت لگو دریافت نکند، به احتمال زیاد اشتباهات بسیاری را مرتکب خواهد شد.\nاگر نحوه تفکر این شخص مثل یک کامپیوتر باشد، آنوقت حتی اگر دستورالعمل مربوط به تنها یک قطعه لگو و نحوه قرار دادن آن در محل صحیح به طور مشخص تعیین نشود، کل فرآیند ساخت اسباب‌بازی لگو با مشکل مواجه خواهد شد. در واقع،‌ دستور دادن به این شخص فاقد هوشمندی بسیار شبیه به نحوه انجام برنامه نویسی است. با این تفاوت که در واقعیت به جای یک شخص فاقد هوشمندی، با یک کامپیوتر فاقد هوشمندی سرو کار داریم.\nهمچنین در برنامه نویسی، به جای دستورالعمل‌های مربوط به نحوه ساخت یک اسباب‌بازی لگو، اطلاعات و دستوراتی در خصوص نحوه تکمیل یک برنامه کامپیوتری مثل یک بازی کامپیوتری یا یک کاربرد تحت وب (وب اپلیکیشن) برای کامپیوتر فراهم می‌شوند. نکته مهمی که وجود دارد این است که کامپیوترها فاقد هوشمندی هستند؛ یعنی کامپیوترها به عنوان یک فناوری بسیار پیچیده ساخته شده‌اند، اما در واقعیت، عملکرد اصلی یک کامپیوتر به نحوه مدیریت و فرمان دادن به آن مربوط می‌شود\nالبته برنامه نویسی به سادگی دستور دادن به یک شخص فاقد هوشمندی نیست. دلیلش این است که در برنامه نویسی، نمی‌توان به زبان انسان با کامپیوتر ارتباط برقرار کرد. بلکه، کامپیوتر از زبان ماشین استفاده می‌کند. کدهای ماشین یک نوع زبان عددی به حساب می‌آیند که به آن زبان دودویی باینری (Binary) کدهای باینری به گونه‌ای طراحی شده‌اند که کامپیوتر می‌تواند به سرعت آن‌ها را بخواند و دستورالعمل‌های تعیین شده توسط آن‌ها را اجرا کند. هر دستورالعمل ارجاع شده به رشته‌ای متشکل از اعداد صفر و یک تبدیل و این رشته سپس برای اجرای وظیفه مربوطه توسط کامپیوتر تفسیر می‌شود.\nبرای درک بهتر، به مثال لِگو باز می‌گردیم. در مثال ساخت بازی لگو، اگر شخص مربوطه علاوه بر عدم هوشمندی، زبان ما را هم متوجه نشود و مثلاً به زبان چینی صحبت کند، آنگاه شرایط سخت‌تر خواهد شد\nدر چنین شرایطی برای اینکه بتوانیم با این شخص ارتباط برقرار کنیم، باید دستورالعمل‌ها را از زبان خودمان به زبانی تبدیل کنیم که این شخص متوجه می‌شود\n\n', '../public_html/assets/uploads/446e1494-3ab5-40e1-bb9e-4a5f2ea7138e.png', '../public_html/assets/uploads/885092b6-2998-451a-8ffe-cef7d3fb30ae.png', 'کاربرد برنامه نویسی\nحال بگذارید بببینیم کاربرد برنامه نویسی چیست و واقعاً به چه کاری می‌آید؟ برنامه نویسی یا همان کدنویسی تقریباً در تمام جنبه‌های زندگی مُدرن کاربرد دارد. تمام اپلیکیشن‌ها یا همان برنامه‌های نصب شده روی گوشی‌های هوشمند، تبلت‌ها یا کامپیوترها به وسیله کدها اجرا می‌شوند. در سایر سیستم‌های دیجیتال مثل تلویزیون، ماشین حساب و حتی یخچال هم از برنامه نویسی استفاده شده است. امروزه تقریباً همه اتومبیل‌ها هم دارای کامپیوترهای تعبیه شده هستند که در آن‌ها هم برای کنترل همه چیز از سیستم تهویه گرفته تا تزریق کننده‌های سوخت از برنامه نویسی استفاده می‌شود.\nدر شهرها از برنامه‌های کامپیوتری و کدنویسی برای راهبری و کنترل چراغ‌های راهنمایی استفاده می‌شود. سیستم‌های آنالوگ قدیمی امروزه با استفاده از سیستم‌های کامپیوتری بهینه‌سازی شده‌اند. این قابلیت به مهندسان کامپیوتر امکان می‌دهد تا بتوانند سیستمی بهینه‌تر و در عین حال کم هزینه‌تر را بسازند.\nبرنامه نویسی ، زندگی روزمره را به میزان بسیار زیادی تحت تاثیر قرار داده است؛ به این دلیل که کدنویسی و کامپیوترها تقریباً در همه صنایع و در سراسر جهان مورد استفاده قرار می‌گیرند و این رشد و نفوذ در تمام بخش‌های کلیدی صنایع مختلف در آینده نیز ادامه خوهد داشت. کامپیوترها جایگزین فناوری‌های منسوخ شده خواهند شد و کدنویسی در زندگی روزمره انسان‌ها بیش‌تر و بیش‌تر حضور خواهد داشت.\nانواع زبان برنامه نویسی\nآشنایی داشتن با انواع زبان های برنامه نویسی برای افرادی که به دنبال شغلی در زمینه برنامه نویسی و سایر حوزه‌های فناوری اطلاعات هستند، بسیار مفید و مهم است. به واسطه آشنایی با انواع زبان‌های برنامه نویسی می‌توان تشخیص داد که چه زبانی برای چه کاربردی مناسب است و افراد می‌توانند بر اساس زمینه مورد علاقه، زبان برنامه نویسی مناسب را برای یادگیری انتخاب کنند\n', '\nانواع زبان برنامه نویسی را می‌توان به شکل دیگری هم دسته‌بندی کرد که در ادامه ملاحظه می‌شود:\n•	زبان برنامه نویسی رویه‌ای\n•	زبان برنامه نویسی تابعی\n•	زبان برنامه نویسی شی گرا\n•	زبان برنامه نویسی اسکریپتی\n•	زبان برنامه نویسی منطقی\n•	زبان برنامه نویسی پایگاه داده‌ای\n•	زبان برنامه نویسی جریان داده\n', '100', 1);

-- --------------------------------------------------------

--
-- Table structure for table `careeropportunities`
--

CREATE TABLE `careeropportunities` (
  `id` int(11) NOT NULL,
  `branch` mediumtext NOT NULL,
  `jobCategory` mediumtext NOT NULL,
  `jobPlace` mediumtext NOT NULL,
  `jobTitle` mediumtext NOT NULL,
  `jobTime` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `careeropportunities`
--

INSERT INTO `careeropportunities` (`id`, `branch`, `jobCategory`, `jobPlace`, `jobTitle`, `jobTime`) VALUES
(1, 'محصول', 'محصول', 'تهران', 'ارشد طراح رابط کاربری', 'تمام وقت'),
(3, 'محصول', 'محصول', 'تهران', 'طراح تجربه کاربری', 'تمام وقت'),
(4, 'محصول', 'اصفهان', 'تهران', 'ارشد طراح رابط کاربری', 'تمام وقت'),
(5, 'محصول', 'محصول', 'تهران', 'طراح تجربه کاربری', 'تمام وقت'),
(13, 'اموزش', 'اموزش', 'تهران', 'Senior backend developer ', 'تمام وقت'),
(8, 'محصول', 'محصول', 'تهران', 'ارشد طراح رابط کاربری', 'تمام وقت');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `title` mediumtext NOT NULL,
  `teacherFirstName` mediumtext NOT NULL,
  `teacherLastName` mediumtext NOT NULL,
  `category` mediumtext NOT NULL,
  `level` mediumtext NOT NULL,
  `lessons` mediumtext NOT NULL,
  `time` mediumtext NOT NULL,
  `price` mediumtext NOT NULL,
  `image` mediumtext NOT NULL,
  `discount` mediumtext NOT NULL,
  `Detail_Head_Title` mediumtext NOT NULL,
  `detailSubtitle` mediumtext NOT NULL,
  `date` mediumtext NOT NULL,
  `place` mediumtext NOT NULL,
  `quantity` mediumtext NOT NULL,
  `language` mediumtext NOT NULL,
  `title_description1` mediumtext NOT NULL,
  `description1` mediumtext NOT NULL,
  `title_description2` mediumtext NOT NULL,
  `description2` mediumtext NOT NULL,
  `title_description3` mediumtext NOT NULL,
  `description3` mediumtext NOT NULL,
  `title_description4` mediumtext NOT NULL,
  `description4` mediumtext NOT NULL,
  `headers` mediumtext NOT NULL,
  `isShown` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `title`, `teacherFirstName`, `teacherLastName`, `category`, `level`, `lessons`, `time`, `price`, `image`, `discount`, `Detail_Head_Title`, `detailSubtitle`, `date`, `place`, `quantity`, `language`, `title_description1`, `description1`, `title_description2`, `description2`, `title_description3`, `description3`, `title_description4`, `description4`, `headers`, `isShown`) VALUES
(17, 'وب یک(HTML5, CSS3 with Dreamweaver)', '', 'قاسمی', 'برنامه نویسی', 'مبتدی', '30', '60', '0', '../public_html/assets/uploads/بنر دوره WEB (1).jpg', '0', 'وب یک', 'HTML5, CSS3 with Dreamweaver', '', 'تهران، حضوری', '60', 'فارسی', 'آشنایی با مفهوم و تاریخچه وب و زیرساختهای نرم افزاری و سخت افزاری لازم برای ایجاد، استقرار و نگهداری وب سایت ها', '', 'معرفی مفاهیم نرم افزاری مرتبط با طراحی وب مانند HTML و CSS', '', 'بررسی انواع Layout ها', '', 'معرفی Muse و کاربرد آن', '', 'آشنایی با مفهوم و تاریخچه وب و زیرساختهای نرم افزاری و سخت افزاری لازم برای ایجاد، استقرار و نگهداری وب سایت ها,\nمعرفی مفاهیم شبکه ای مرتبط با وب مانند Domain،Host،Web Server،DNS Server,\nمعرفی مفاهیم نرم افزاری مرتبط با طراحی وب مانند HTML و CSS,\nبررسی مفهوم Markup Language,\nبررسی مفهوم Cascading Style Sheet,\nتشریح نحوه عملکرد Web Browser ها,\nبررسی مفهوم Search Engine,\nبررسی مفهوم SEO,\nبررسی مفهوم UI (واسط کاربری),\nبررسی مفهوم UX,\nبررسی مفهوم Responsive (واکنش گرا),\nبررسی عبارت های مصطلح روز وب مانند Single Page ،Parallax و …,\nبررسی مفهوم Tag و ساختار یک سند HTML استاندارد,\nبررسی نسخه های HTML و ویژگی ها HTML5,\nمعرفی DOCTYPE,\nآموزش روش آماده سازی بستر طراحی وب و نرم افزار های مربوطه,\nمعرفی Project Structure در طراحی وب,\nارائه طبقه بندی تگ ها مانند Text Level و Block Level ،List و …,\nبررسی نکات مربوط به List ها,\nبررسی پاراگراف ها، span و کلیه تگ های طبقه بندی شده,\nمعرفی مفهوم Attribute,\nمعرفی مفهوم Comment و دلائل استفاده از آن,\nمعرفی و ارائه مثال از تگ های مربوط به هر طبقه,\nبررسی استاندارد های نامگذاری المانها,\nبررسی مفهوم Validation در اسناد HTML,\nمعرفی CSS,\nبررسی نقش CSS در آرایش تگ ها,\nمعرفی قابلیت های Design Environment مانند منو ها و قسمت های مختلف Dream Weaver,\nبررسی روشهای مختلف اعمال Style روی تگها مانند Inline،Internal،External,\nمعرفی انواع Selector ها در CSS,\nبررسی نحوه استفاده از تصاویر در سند HTML,\nبررسی انواع File Path,\nبررسی مفهوم Save/Export For Web,\nبررسی نحوه Load شدن تصاویر,\nبررسی پسوندهای مختلف تصاویر,\nبررسی تصاویر PNG و مشکلات نمایشی مرورگرها,\nبررسی نکات مربوط به تصاویر مانند Transparency و …,\nبررسی Image Map,\nبررسی نحوه ویرایش و بهینه سازی تصاویر برای وب با نرم افزار های مربوطه,\nبررسی نحوه استفاده از تصاویر در Background,\nبررسی نکات مربوط به استفاده از تصاویر در Background مانند Repeat و …,\nبررسی نحوه استفاده از صدا و تصویر در Background,\nمعرفی IFrame و روش استفاده از آن,\nبررسی روش استفاده از Google Map و سایر موارد مرتبط با IFrame,\nایجاد انیمیشن با تصاویر و ابزار های مربوطه,\nبررسی نحوه استفاده از رنگ,\nبررسی نحوه استفاده از فونت,\nبررسی نکات مربوط به فونت مانند Size و Weight و …,\nمعرفی انواع فونت ها و پسوندهای مربوطه,\nبررسی Icon ها و فونت های گوگل,\nبررسی روش استفاده از کاراکترهای خاص در سند HTML,\nمعرفی مفهوم Hyper Link و نکات مربوط به Navigation,\nآشنایی با مفهوم Anchor و Hash,\nایجاد Shortcut برای لینک ها,\nبررسی Site Map و روش ایجاد آن,\nبررسی روش ایجاد منو و انواع آن,\nبررسی روشهای مختلف آدرس دهی لینکها مانند Internal و External,\nبررسی نکات جدید HTML5 در مورد لینکها مانند Download,\nبررسی تگ Table و اجزاء مختلف آن,\nبررسی معایب و مزایای Table,\nبررسی نحوه استفاده از Table برای چیدمان,\nبررسی نحوه اختصاص اندازه به المانها,\nبررسی نکات مربوط به Formatting در Table,\nبررسی نکات جدید HTML5 در جداول,\nبررسی مفهوم Layout های Tableless,\nبررسی Div و نکات مربوطه در حیطه Positioning,\nبررسی روش های تقسیم بندی صفحه,\nبررسی مفاهیم Margin و Padding,\nبررسی Border و نکات مربوطه,\nبررسی نکات مربوط به Text مانند Direction ،Decoration ،Align و …,\nبررسی نکات مربوط به Positioning در CSS3,\nبررسی نکات حرفه ای تر در CSS3 مانند Animation و TransitionBottom of Form,\nبررسی انواع Effect ها در CSS3,\nبررسی نکات مربوط به Transform در CSS3,\nبررسی انواع Layout ها,\nبررسی Localization برای زبانهای RTL,\nمعرفی مفهوم Float و Absolute و …,\nمعرفی مفاهیم مرتبط با Boxing,\nبررسی Form و انواع Input ها,\nمعرفی تگ های مفهومی HTML 5 و بررسی نقش هر یک,\nبررسی امکانات مرتبط با شبکه های اجتماعی,\nطرح مشکل نمایش وب سایت در مرورگرهای متفاوت و نکات مربوطه,\nبررسی Drag & Drop,\nبررسی Canvas و نحوه استفاده از آن,\nبررسی SVG و نحوه استفاده از آن,\nمعرفی Edge و Illustrator و کاربرد آنها,\nمعرفی Muse و کاربرد آن', 1),
(18, 'وب دو(Responsive design with bootstrap , Less & Sass)', '', 'غفاری', 'برنامه نویسی', 'متوسط', '25', '34', '0', '../public_html/assets/uploads/بنر دوره WEB (2).jpg', '0', 'وب دو', 'Responsive design with bootstrap , Less & Sass', '', 'تهران', '34', 'فارسی', 'بررسی مفهوم Responsive', '', 'بررسی روش نصب و راه اندازی SASS و COMPASS', '', 'معرفی و بررسی تاریخچه BootStrap', '', 'معرفی پلاگین Susy و نکات مربوطه', '', 'بررسی مفهوم Responsive,\r\nمعرفی مفهوم CSS Framework,\r\nمعرفی و بررسی تاریخچه BootStrap,\r\nبررسی روش استفاده از BootStrap در یک سند HTML,\r\nمعرفی Grid System,\r\nمعرفی Media Query,\r\nمعرفی انواع سایزها و کلاسهای مرتبط و روش تشخیص Resolution کاربر,\r\nمعرفی انواع Layout ها و کلاسهای مرتبط مانند Fluid Layout,\r\nمعرفی Fixed Layout,\r\nمعرفی Responsive Layout,\r\nبررسی Typography با BootStrap,\r\nبررسی روش ایجاد فرم و کلاسهای مرتبط,\r\nبررسی روش پنهان سازی بخش هایی از سند,\r\nبررسی نکات و کلاسهای مرتبط با جدول,\r\nبررسی نکات و کلاسهای مرتبط با تصاویر,\r\nبررسی روش استفاده از Icon ها,\r\nبررسی روش استفاده از Helper ها,\r\nبررسی نکات و کلاسهای مرتبط با دکمه,\r\nبررسی روش سفارشی سازی BootStrap,\r\nمعرفی LESS و SASS و تشریح مزایای استفاده از آنها و تفاوت ها,\r\nبررسی روش نصب و راه اندازی SASS و COMPASS,\r\nبررسی روش ایجاد پروژه و ابزار های گرافیکی مورد استفاده در SASS مانند Scout App و CodeKit و LiveReload,\r\nبررسی روش ایجاد و فشرده سازی یک StyleSheet,\r\nبررسی روش ایجاد متغیرهای در SASS,\r\nبررسی روش ایجاد و استفاده از فایل های Partial,\r\nبررسی الگوهای نوشتاری Nesting,\r\nبررسی روش اتصال Selector ها و رابطه Parent-Child بین Selector ها,\r\nبررسی روش استفاده از @extend برای گسترش قوانین تعریف شده,\r\nبررسی الگوهای نوشتاری Mixins,\r\nبررسی روش های اعمال تغییرات روی رنگ ها,\r\nمعرفی پلاگین Susy و نکات مربوطه,\r\nبررسی روش ایجاد Media Query های پیشرفته تر با SASS و MIXINS,\r\nپیاده سازی منطق با SASS,\r\nبررسی روش نگارش و کامپایل LESS,\r\nبررسی روش حل مشکل CROSS BROWSER در LESS,\r\nبررسی Server Side Compilation,\r\nبررسی روش استفاده از Source Map,\r\nبررسی روش Compress و Minimize کردن,\r\nبررسی متودولوژی های OOCSS و SMACSS و BEM,\r\nبررسی روش استفاده از متغیر ها و MIXINS,\r\nبررسی Nested Rule ها,\r\nبررسی انواع عملگرها و توابع,\r\nبررسی روش استفاده از Parent Selector,\r\nبررسی عملیات روی رنگها,\r\nبررسی Media Query ها در LESS,\r\nبررسی روش استفاده از LESS در GRID,\r\nبررسی تعاملات LESS با BOOTSTRAP', 1),
(19, 'وب سه(JavaScript & jQuery & Ajax)', '', 'جعفری', 'برنامه نویسی', 'سخت', '30', '58', '0', '../public_html/assets/uploads/بنر دوره WEB (3).jpg', '0', 'وب سه', 'JavaScript & jQuery & Ajax', '', 'تهران', '58', 'فارسی', 'بررسی مفهوم Client Side کد و لزوم وجود امکان برنامه نویسی سمت کلاینت', '', 'بررسی انواع عملگرها', '', 'بررسی تنوع رویدادهای المانها', '', 'آشنايی با jquery و معرفی jQuery UI', '', 'بررسی مفهوم Client Side کد و لزوم وجود امکان برنامه نویسی سمت کلاینت,\r\nمعرفی زبان برنامه نویسی Java Script و روش استفاده از آن در یک سند HTML,\r\nبررسی نکات مربوط به تگ Script و محل نوشتن دستورات,\r\nمعرفی مفهوم متغیر و ارائه نکات مربوط به متغیر ها در Java Script,\r\nبررسی متغیرهای Local و Global,\r\nبررسی مفهوم Notation و روش رعایت آن در Java Script,\r\nبررسی فایل های js. و روش استفاده از آنها,\r\nبررسی انواع عملگرها,\r\nمعرفی مفهوم شرط و ساختارهای بررسی شرط,\r\nبررسی دستور switch,\r\nبررسی مفهوم حلقه و موارد نیاز به حلقه های تکرار,\r\nبررسی انواع حلقه های تکرار,\r\nبررسی حلقه های while ،for و …,\r\nبررسی روش تعریف تابع و نکات مربوطه,\r\nبررسی مفهوم رویداد و روش اداره آن,\r\nبررسی تنوع رویدادهای المانها,\r\nبررسی تفاوت انواع رویدادهای کلید مانند keyup و …,\r\nمعرفی مفهوم Anonymous Function و نقش آن در مدیریت رویداد,\r\nمعرفی DOM و اجزاء آن و روش دسترسی به آنها,\r\nبررسی انواع روشهای دسترسی به المانها مانند دسترسی بر اساس id و …,\r\nبررسی روش درج، حذف و ویرایش المانها و Node ها,\r\nبررسی روش دسترسی به Node های پدر، فرزند و حالتهای متنوع دسترسی,\r\nمعرفی innerText و innerHTML,\r\nمعرفی Framework و مفهوم آن و انواع Framework های Java Scrip,\r\nمعرفی jQuery و مزایای استفاده از آن,\r\nبررسی روش استفاده از jQuery در یک سند HTML,\r\nبررسی و مقایسه عملیات مختلف مانند اداره رویداد، فراخوانی توابع، مقداردهی به مشخصه ها در jQuery و Java Script,\r\nمعرفی Selector های jQuery و نکات مربوطه,\r\nآشنايی با jquery,\r\nآموزش نصب jquery,\r\nچگونگي شيوه کار jquery,\r\nآموزش قواعد نوشتاری در jquery,\r\nآموزش دسترسی به المان های html در jquery,\r\nSelect To Every Things آموزش دسترسی به تمام المان ها,\r\nID Selector آموزش دسترسی به وسيله شناسه,\r\nTag Name Selector آموزش دسترسی به وسيله ی نام تگ,\r\nClass Selector آموزش دسترسی به وسيله ی کلاس,\r\nAttribute Selector آموزش دسترسی به وسيله ی Attribute,\r\nSelecting Visibility آموزش دسترسی توسط نمايش و عدم نمايش,\r\nSelecting Parents and Children آموزش دسترسی توسط فرزند و پدر,\r\nآموزش رويداد ها در jQuery,\r\nمعرفی Effect ها در jQuery,\r\nمعرفی مفهوم AJAX و بررسی روش پیاده سازی آن در Java Script و jQuery,\r\nبررسی مزایای AJAX,\r\nمعرفی jQuery UI,\r\nبررسی روش استقرار jQuery UI در سند,\r\nبررسی انواع المانهای jQuery UI', 1),
(20, 'سیستم عامل kali', '', 'آقاپور', 'امنیت', 'سخت', '13', '10', '0', '../public_html/assets/uploads/سیستم عامل kali.jpg', '0', 'سیستم عامل kali', 'سیستم عامل kali', '', 'تهران', '13', 'فارسی', 'Penetration Testing with Kali Linux: General Course Introduction', 'سیستم‌عامل Kali یک سیستم‌عامل مبتنی بر لینوکس می‌باشد که برای متخصصان امنیت جهت استفاده در تست نفوذ ایجاد شده است.در این سیستم‌عامل Frameworkها و ابزارهای لازم برای کارشناسان تست نفوذ جمع‌آوری و دسته‌بندی شده است. در دوره تست نفوذ با کالی لینوکس، دانش‌پژوهان با انواع ابزارهای جمع‌آوری اطلاعات و پویش آسیب‌پذیری در این سیستم‌عامل آشنا می‌شوند و در ادامه، استفاده از Frameworkهای تخصصی برای بهره‌گیری از آسیب‌پذیریهای کشف‌شده را فرا می‌گیرند. یکی از آسیب‌پذیری‌هایی متداول در نرم‌افزارها و برنامه‌های کاربردی آسیب‌پذیری \"سرریز بافر\" که منجر به حملات Buffer Over Flow می‌گردد، می‌باشد که در این دوره به تشریح آن پرداخته می‌شود. همچنین، آشنایی با روش‌های دورزدن مکانیزم‌های امنیتی، همانند Antivirus و اجرای حملات سمت کلاینت از ماژول‌های کاربردی این دوره می‌باشد. در ادامه دانشجویان با شیوه‌های ارتقاء سطح دسترسی در سیستم‌عامل ویندوز و لینوکس، دایمی کردن دسترسی‌های بدست‌آمده و پاک کردن ردپای خود، و در انتها روش‌های Lateral Movement به منظور نفوذ به سایر سرورهای شبکه هدف آشنا می‌شوند. تست نفوذ شبکه‌های ویندوزی که دارای سرویس Active Directory و Domain Controller هستند از فصل‌های مهم این دوره می‌باشند. کارشناسان امنیت با گذراندن این دوره‌، قادر خواهند بود از امکانات و ابزارهای بروز سیستم‌عامل Kali Linux به خوبی در انجام پروژه‌های تست نفوذ بهره ببرند و شانس موفقیت خود را در پروژه‌های تست نفوذ افزایش دهند.', 'Getting Comfortable with Kali Linux', 'مخاطبین دوره^\r\nکارشناسان تست نفوذ^\r\nکارشناسان امنیت شبکه^\r\nمدیران شبکه\r\n', 'Bash & PowerShell Scripting', 'پیش نیاز دوره^\r\nآشنایی با شبکه‌‌های رایانه‌ای (MCSE و CCNA)^\r\nآشنایی با سیستم‌عامل لینوکس (LPIC 1 & 2)', 'Information Gathering', '', 'Penetration Testing with Kali Linux: General Course Introduction,\r\n	How to Approach the Course,\r\n	Summary of NTK Learning Modules,\r\nGetting Comfortable with Kali Linux,\r\n	Kali Networking,\r\n	Kali Service,\r\n	Essential Command	,\r\nBash & PowerShell Scripting,\r\n	Implementing a number of scenario in kali with bash script (Finding Subdomain, Detecting Live system, port Scan , ...),\r\n	Writing Scenario in windows power shell (Detecting live system, port scan, download and execution, …),\r\nInformation Gathering,\r\n	Passive Information Gathering,\r\n	Active Information Gathering,\r\nVulnerability Scanning,\r\n	Vulnerability Scanning with Nmap,\r\n	Vulnerability Scanning with Nessus,\r\nLocating Public Exploits,\r\n	Online Exploit Resources,\r\n	Offline Exploit Resources,\r\nThe Metasploit Framework,\r\n	Setup and navigate Metasploit,\r\n	Using Metasploit Payloads,\r\n	Post-Exploitation with Metasploit,\r\nClient-Side Attacks,\r\n	Binary Payloads (msfvenom),\r\n	VBScript Infection Methods,\r\nAntivirus Evasion,\r\n	Understand antivirus evasion testing best practices,\r\n	Manually evade AV solutions,\r\n	Leverage automated tools for AV evasion,\r\nPassword Attack,\r\n	Attacking Network Services Logins,\r\n	Working with Password Hashes,\r\nBuffer Overflows,\r\n	Windows Buffer Overflows,\r\n	Linux Buffer Overflows,\r\nPrivilege Escalation,\r\n	Windows Privilege Escalation,\r\n	Linux Privilege Escalation,\r\nPort forwarding & Tunneling,\r\n	Use Socat for port forwarding,\r\n	SSH Tunneling,\r\n	HTTP tunneling with Chisel,\r\n	DNS tunneling with dnscat,\r\nActive Directory Attacks,\r\n	Active Directory Enumeration,\r\n	Attacking Active Directory Authentication,\r\n	Lateral Movement in Active Directory', 1),
(21, 'دوره تست نفوذ پیشرفته وب', '', 'آقاپور', 'امنیت', 'سخت', '30', '30', '0', '../public_html/assets/uploads/بنر دوره تست نفوذ پیشرفته وب.png', '', 'نفوذ پیشرفته وب', 'نفوذ پیشرفته', '', 'تهران', '30', 'فارسی', 'Advanced Reconnaissance', 'دوره تست نفوذ وب به افراد توانایی تست آسیب پذیری های مختلف وب براساس متدولوژی OWASP را می دهد در دوره تست نفوذ وب 10 آسیب پذیری برتر دنیا یا همان OWASP TOP 10 بررسی می شود، کلیه مراحل تست به صورت دستی و یا با استفاده از ابزار Burp Suite انجام می شود. هدف دوره تربیت کارشناس تست نفوذ وب می باشد که بتواند یک سامانه تحت وب را بررسی و گزارشی کامل ارائه دهد.', 'NO-SQL Injection in Mongodb and Redis', 'مخاطبین دوره^\nافراد علاقمند به تست نفوذ برنامه های تحت وب\nبرنامه نویسان تحت وب\n', 'Server-Side Request Forgery', 'پیش نیاز دوره^\r\nآشنایی با یکی از زبان های برنامه نویسی (php, aspx, jsp)\r\nآشنایی با زبان های برنامه نویسی HTML/ JAVA/ Script', 'SSRF Vulnerability', '', 'Module #1 - Introduction To Web Application Pentest, 	WEB App Arhitecture, 	HTTP Protocol, 	Web Application Framework, 	Web Application Assessment Methodology, 	OWASP introduction, Module #2 - Reconnaissance & Mapping, 	Search Engine, 	Dns Enumeration, 	Subdomains, 	Service Enumeration, 	FrameWork Enumeration, 	WAF Detection, 	Vhost & Dhost, 	Mapping, Module #3 - Client Side Attack, 	HTML & CSS Comment, 	JS Control Bypass, 	JS framework control bypass, 	Automated bypass Control, Module #4 - XSS, 	Types of XSS, 	Discovery XSS, 	Exploitation XSS, Module #5 - Command & Code Injection, 	OS Command Injection, 	OS Command Injection Code Execution, Module #6 - XXE, 	XXE to FI, 	XXE to command Injection, 	XXE xinclude, 	XXE shell upload, Module #7 - SQL Injection, 	Types of SQLi, 	SQLi Discovery, 	SQLi Exploitation, Module #8 - Broken Access Control, 	IDOR, 	Missing Functional Level Access Control, 	File Inclusion, 	Shell Upload, Module #9 - Identification and Authentication Failures, 	user Enumeration, 	Disctionary Attack, 	Rule base Attack, 	Captcha Bypass', 1),
(22, 'وب پک(Web Design Pack)', '', 'غفاری', 'برنامه نویسی', 'سخت', '184', '150', '0', '../public_html/assets/uploads/بنر دوره وب پک.png', '0', 'وب پک', 'Web Design Pack', '', 'تهران', '150', 'فارسی', 'آشنایی با مفهوم و تاریخچه وب و زیرساختهای نرم افزاری و سخت افزاری لازم برای ایجاد، استقرار و نگهداری وب سایت ها', '', 'معرفی CSS', '', 'بررسی انواع Layout ها', '', 'معرفی jQuery و مزایای استفاده از آن', '', 'سرفصل دوره Web Design I:,\r\nآشنایی با مفهوم و تاریخچه وب و زیرساختهای نرم افزاری و سخت افزاری لازم برای ایجاد، استقرار و نگهداری وب سایت ها,\r\nمعرفی مفاهیم شبکه ای مرتبط با وب مانند Domain،Host،Web Server،DNS Server,\r\nمعرفی مفاهیم نرم افزاری مرتبط با طراحی وب مانند HTML و CSS,\r\nبررسی مفهوم Markup Language,\r\nبررسی مفهوم Cascading Style Sheet,\r\nتشریح نحوه عملکرد Web Browser ها,\r\nبررسی مفهوم Search Engine,\r\nبررسی مفهوم SEO,\r\nبررسی مفهوم UI (واسط کاربری),\r\nبررسی مفهوم UX,\r\nبررسی مفهوم Responsive (واکنش گرا),\r\nبررسی عبارت های مصطلح روز وب مانند Single Page ،Parallax و …,\r\nبررسی مفهوم Tag و ساختار یک سند HTML استاندارد,\r\nبررسی نسخه های HTML و ویژگی ها HTML5,\r\nمعرفی DOCTYPE,\r\nآموزش روش آماده سازی بستر طراحی وب و نرم افزار های مربوطه,\r\nمعرفی Project Structure در طراحی وب,\r\nارائه طبقه بندی تگ ها مانند Text Level و Block Level ،List و …,\r\nبررسی نکات مربوط به List ها,\r\nبررسی پاراگراف ها، span و کلیه تگ های طبقه بندی شده,\r\nمعرفی مفهوم Attribute,\r\nمعرفی مفهوم Comment و دلائل استفاده از آن,\r\nمعرفی و ارائه مثال از تگ های مربوط به هر طبقه,\r\nبررسی استاندارد های نامگذاری المانها,\r\nبررسی مفهوم Validation در اسناد HTML,\r\nمعرفی CSS,\r\nبررسی نقش CSS در آرایش تگ ها,\r\nمعرفی قابلیت های Design Environment مانند منو ها و قسمت های مختلف Dream Weaver,\r\nبررسی روشهای مختلف اعمال Style روی تگها مانند Inline،Internal،External,\r\nمعرفی انواع Selector ها در CSS,\r\nبررسی نحوه استفاده از تصاویر در سند HTML,\r\nبررسی انواع File Path,\r\nبررسی مفهوم Save/Export For Web,\r\nبررسی نحوه Load شدن تصاویر,\r\nبررسی پسوندهای مختلف تصاویر,\r\nبررسی تصاویر PNG و مشکلات نمایشی مرورگرها,\r\nبررسی نکات مربوط به تصاویر مانند Transparency و …,\r\nبررسی Image Map,\r\nبررسی نحوه ویرایش و بهینه سازی تصاویر برای وب با نرم افزار های مربوطه,\r\nبررسی نحوه استفاده از تصاویر در Background,\r\nبررسی نکات مربوط به استفاده از تصاویر در Background مانند Repeat و …,\r\nبررسی نحوه استفاده از صدا و تصویر در Background,\r\nمعرفی IFrame و روش استفاده از آن,\r\nبررسی روش استفاده از Google Map و سایر موارد مرتبط با IFrame,\r\nایجاد انیمیشن با تصاویر و ابزار های مربوطه,\r\nبررسی نحوه استفاده از رنگ,\r\nبررسی نحوه استفاده از فونت,\r\nبررسی نکات مربوط به فونت مانند Size و Weight و …,\r\nمعرفی انواع فونت ها و پسوندهای مربوطه,\r\nبررسی Icon ها و فونت های گوگل,\r\nبررسی روش استفاده از کاراکترهای خاص در سند HTML,\r\nمعرفی مفهوم Hyper Link و نکات مربوط به Navigation,\r\nآشنایی با مفهوم Anchor و Hash,\r\nایجاد Shortcut برای لینک ها,\r\nبررسی Site Map و روش ایجاد آن,\r\nبررسی روش ایجاد منو و انواع آن,\r\nبررسی روشهای مختلف آدرس دهی لینکها مانند Internal و External,\r\nبررسی نکات جدید HTML5 در مورد لینکها مانند Download,\r\nبررسی تگ Table و اجزاء مختلف آن,\r\nبررسی معایب و مزایای Table,\r\nبررسی نحوه استفاده از Table برای چیدمان,\r\nبررسی نحوه اختصاص اندازه به المانها,\r\nبررسی نکات مربوط به Formatting در Table,\r\nبررسی نکات جدید HTML5 در جداول,\r\nبررسی مفهوم Layout های Tableless,\r\nبررسی Div و نکات مربوطه در حیطه Positioning,\r\nبررسی روش های تقسیم بندی صفحه,\r\nبررسی مفاهیم Margin و Padding,\r\nبررسی Border و نکات مربوطه,\r\nبررسی نکات مربوط به Text مانند Direction ،Decoration ،Align و …,\r\nبررسی نکات مربوط به Positioning در CSS3,\r\nبررسی نکات حرفه ای تر در CSS3 مانند Animation و TransitionBottom of Form,\r\nبررسی انواع Effect ها در CSS3,\r\nبررسی نکات مربوط به Transform در CSS3,\r\nبررسی انواع Layout ها,\r\nبررسی Localization برای زبانهای RTL,\r\nمعرفی مفهوم Float و Absolute و …,\r\nمعرفی مفاهیم مرتبط با Boxing,\r\nبررسی Form و انواع Input ها,\r\nمعرفی تگ های مفهومی HTML 5 و بررسی نقش هر یک,\r\nبررسی امکانات مرتبط با شبکه های اجتماعی,\r\nطرح مشکل نمایش وب سایت در مرورگرهای متفاوت و نکات مربوطه,\r\nبررسی Drag & Drop,\r\nبررسی Canvas و نحوه استفاده از آن,\r\nبررسی SVG و نحوه استفاده از آن,\r\nمعرفی Edge و Illustrator و کاربرد آنها,\r\nمعرفی Muse و کاربرد آن,\r\nسرفصل دوره Web Design II:,\r\nبررسی مفهوم Responsive,\r\nمعرفی مفهوم CSS Framework,\r\nمعرفی و بررسی تاریخچه BootStrap,\r\nبررسی روش استفاده از BootStrap در یک سند HTML,\r\nمعرفی Grid System,\r\nمعرفی Media Query,\r\nمعرفی انواع سایزها و کلاسهای مرتبط و روش تشخیص Resolution کاربر,\r\nمعرفی انواع Layout ها و کلاسهای مرتبط مانند Fluid Layout,\r\nمعرفی Fixed Layout,\r\nمعرفی Responsive Layout,\r\nبررسی Typography با BootStrap,\r\nبررسی روش ایجاد فرم و کلاسهای مرتبط,\r\nبررسی روش پنهان سازی بخش هایی از سند,\r\nبررسی نکات و کلاسهای مرتبط با جدول,\r\nبررسی نکات و کلاسهای مرتبط با تصاویر,\r\nبررسی روش استفاده از Icon ها,\r\nبررسی روش استفاده از Helper ها,\r\nبررسی نکات . کلاسهای مرتبط با دکمه,\r\nبررسی روش سفارشی سازی BootStrap,\r\nمعرفی LESS و SASS و تشریح مزایای استفاده از آنها و تفاوت ها,\r\nبررسی روش نصب و راه اندازی SASS و COMPASS,\r\nبررسی روش ایجاد پروژه و ابزار های گرافیکی مورد استفاده در SASS مانند Scout App و CodeKit و LiveReload,\r\nبررسی روش ایجاد و فشرده سازی یک StyleSheet,\r\nبررسی روش ایجاد متغیرهای در SASS,\r\nبررسی روش ایجاد و استفاده از فایل های Partial,\r\nبررسی الگوهای نوشتاری Nesting,\r\nبررسی روش اتصال Selector ها و رابطه Parent-Child بین Selector ها,\r\nبررسی روش استفاده از @extend برای گسترش قوانین تعریف شده,\r\nبررسی الگوهای نوشتاری Mixins,\r\nبررسی روش های اعمال تغییرات روی رنگ ها,\r\nمعرفی پلاگین Susy و نکات مربوطه,\r\nبررسی روش ایجاد Media Query های پیشرفته تر با SASS و MIXINS,\r\nپیاده سازی منطق با SASS,\r\nبررسی روش نگارش و کامپایل LESS,\r\nبررسی روش حل مشکل CROSS BROWSER در LESS,\r\nبررسی Server Side Compilation,\r\nبررسی روش استفاده از Source Map,\r\nبررسی روش Compress و Minimize کردن,\r\nبررسی متودولوژی های OOCSS و SMACSS و BEM,\r\nبررسی روش استفاده از متغیر ها و MIXINS,\r\nبررسی Nested Rule ها,\r\nبررسی انواع عملگرها و توابع,\r\nبررسی روش استفاده از Parent Selector,\r\nبررسی عملیات روی رنگها,\r\nبررسی Media Query ها در LESS,\r\nبررسی روش استفاده از LESS در GRID,\r\nبررسی تعاملات LESS با BOOTSTRAP,\r\nسرفصل دوره Web Design III:,\r\nبررسی مفهوم Client Side کد و لزوم وجود امکان برنامه نویسی سمت کلاینت,\r\nمعرفی زبان برنامه نویسی Java Script و روش استفاده از آن در یک سند HTML,\r\nبررسی نکات مربوط به تگ Script و محل نوشتن دستورات,\r\nمعرفی مفهوم متغیر و ارائه نکات مربوط به متغیر ها در Java Script,\r\nبررسی متغیرهای Local و Global,\r\nبررسی مفهوم Notation و روش رعایت آن در Java Script,\r\nبررسی فایل های js. و روش استفاده از آنها,\r\nبررسی انواع عملگرها,\r\nمعرفی مفهوم شرط و ساختارهای بررسی شرط,\r\nبررسی دستور switch,\r\nبررسی مفهوم حلقه و موارد نیاز به حلقه های تکرار,\r\nبررسی انواع حلقه های تکرار,\r\nبررسی حلقه های while ،for و …,\r\nبررسی روش تعریف تابع و نکات مربوطه,\r\nبررسی مفهوم رویداد و روش اداره آن,\r\nبررسی تنوع رویدادهای المانها,\r\nبررسی تفاوت انواع رویدادهای کلید مانند keyup و …,\r\nمعرفی مفهوم Anonymous Function و نقش آن در مدیریت رویداد,\r\nمعرفی DOM و اجزاء آن و روش دسترسی به آنها,\r\nبررسی انواع روشهای دسترسی به المانها مانند دسترسی بر اساس id و …,\r\nبررسی روش درج، حذف و ویرایش المانها و Node ها,\r\nبررسی روش دسترسی به Node های پدر، فرزند و حالتهای متنوع دسترسی,\r\nمعرفی innerText و innerHTML,\r\nمعرفی Framework و مفهوم آن و انواع Framework های Java Scrip,\r\nمعرفی jQuery و مزایای استفاده از آن,\r\nبررسی روش استفاده از jQuery در یک سند HTML,\r\nبررسی و مقایسه عملیات مختلف مانند اداره رویداد، فراخوانی توابع، مقداردهی به مشخصه ها در jQuery و Java Script,\r\nمعرفی Selector های jQuery و نکات مربوطه,\r\nآشنايی با jquery,\r\nآموزش نصب jquery,\r\nچگونگي شيوه کار jquery,\r\nآموزش قواعد نوشتاری در jquery,\r\nآموزش دسترسی به المان های html در jquery,\r\nSelect To Every Things آموزش دسترسی به تمام المان ها,\r\nID Selector آموزش دسترسی به وسيله شناسه,\r\nTag Name Selector آموزش دسترسی به وسيله ی نام تگ,\r\nClass Selector آموزش دسترسی به وسيله ی کلاس,\r\nAttribute Selector آموزش دسترسی به وسيله ی Attribute,\r\nSelecting Visibility آموزش دسترسی توسط نمايش و عدم نمايش,\r\nSelecting Parents and Children آموزش دسترسی توسط فرزند و پدر,\r\nآموزش رويداد ها در jQuery,\r\nمعرفی Effect ها در jQuery,\r\nمعرفی مفهوم AJAX و بررسی روش پیاده سازی آن در Java Script و jQuery,\r\nبررسی مزایای AJAX,\r\nمعرفی jQuery UI,\r\nبررسی روش استقرار jQuery UI در سند,\r\nبررسی انواع المانهای jQuery UI', 1),
(23, 'ری اکت(React)', '', '', 'برنامه نویسی', 'متوسط', '29', '40', '0', '../public_html/assets/uploads/React.png', '0', 'ری اکت', 'react', '', 'تهران', '29', 'فارسی', 'Plugins', '', 'React basics', '', 'JSX', '', 'HOC\'s', '', 'JavaScript(new features in ES6),\r\nOOP In JavaScript,\r\nNode.js/npm,\r\nWebpack introduction,\r\nConfiguring webpack,\r\nOutput and Loaders,\r\nPlugins,\r\nmodern JavaScript using ES6 ,npm,babel and webpack,\r\nReact-introduction,\r\nReact basics,\r\nJSX,\r\nReact Components,\r\nClass Based And Functional Components,\r\nProps and Validating Props,\r\nState,\r\nReact –Transitions and Animations,\r\nStyling React Components & Elements,\r\nHOC\'s,\r\nPure Component,\r\nComponent Lifecycle,\r\nReact-Events,\r\nWorking with forms in React,\r\nReact-router,\r\nHttp Requests in React,\r\nWorking With lists and Keys,\r\nReact -refs,\r\nDebugging React Apps,\r\nRedux,\r\nBuild And Upload Project', 1),
(25, 'دوره (ui/ux)', '', '', 'طرحی و تدوین', 'متوسط', '38', '40', '0', '../public_html/assets/uploads/بنر دوره UI-UX.jpg', '0', '', '(ui/ux)', '', 'تهران', '38', 'فارسی', 'معماری اطلاعات – IA', '', 'تایپوگرافی در UI', '', 'دیزاین سیستم و uikit', '', 'معرفی وب‌سایت، ابزار، پلاگین و آموزش', '', 'مقدمات و مفاهیم رابط و تجربه کاربری,\r\n------- آشنایی با دوره و اصطلاحات آن,\r\n------- تاریخچه و تعاریف رابط کاربری و تجربه کاربری,\r\n------- اهمیت و مزایای رابط کاربری و تجربه کاربری,\r\n------- پرسونا - Persona,\r\n------- تحقیق کاربری یا User research,\r\n------- کاربرد پذیری – Usability,\r\n------- دسترسی پذیری - Accessibility,\r\n------- معماری اطلاعات – IA,\r\n------- ارزیابی و تست در تجربه کاربری – UX Evaluation,\r\n------- نویسندگی تجربه کاربری – UX Writing,\r\n------- قوانین تجربه کاربری – UX Laws,\r\n------- قواعد گشتالت و کاربرد آن در UI/UX,\r\nاصول و مقدمات طراحی رابط کاربری,\r\n------- مفاهیم اولیه طراحی، نسبت طلایی، طراحی اتمی، تفکر طراحی,\r\n------- آموزش نرم افزار فیگما و فیگجم,\r\n------- آموزش طراحی Userflow,\r\n------- طراحی اسکچ - Sketch,\r\n------- طراحی وایرفریم - Wireframe,\r\n------- طراحی پروتوتایپ – Prototype,\r\n------- روانشناسی رنگ، روش‌ها و ابزارهای انتخاب رنگ در UI,\r\n------- فواصل و سایه ها در طراحی رابط کاربری,\r\n------- تایپوگرافی در UI,\r\n------- آیکن ها در طراحی رابط کاربری - آیکونوگرافی,\r\n------- طراحی واکنش‌گرا و گریدسیستم,\r\n------- آموزش کامپوننت، واریانت و autolayout در فیگما,\r\n------- پلاگین ها، کامیونیتی و فعالیت تیمی در فیگما,\r\n------- آموزش پروتوتایپ اپلیکیشن موبایل در فیگما,\r\n------- ساخت اینترکتیو کامپوننت در فیگما,\r\n------- دیزاین سیستم و uikit,\r\n------- آشنایی با متریال دیزاین,\r\nموضوعات تکمیلی و اجرای پروژه,\r\n------- انجام پروژه دوره – وب‌سایت یا اپلیکیشن,\r\n------- دیزاین هنداف و تعامل با تیم برنامه‌نویسی,\r\n------- طراحی پست و استوری اینستاگرام با فیگما,\r\n------- معرفی وب‌سایت، ابزار، پلاگین و آموزش,\r\n------- معرفی دریبل و ابزارهای مرتبط برای انتشار نمونه‌کار و کسب پروژه,\r\n------- بررسی فضای کسب و کار، مذاکره با کارفرما و بهبود رزومه تجربه کاربری', 1),
(26, 'Network \n +', '', 'آقاپور', 'شبکه', 'سخت', '205', '30', '0', '../public_html/assets/uploads/بنر دوره Network +.jpg', '0', 'دوره کامل و جامع نتورک پلاس', 'Network+', '', 'تهران', '205', 'فارسی', 'Overview of domain, client, server, workgroup, networking', '', 'Overview of OSI model', '', 'Overview of APIPA and DHCP', '', 'Networking Attacks', '', 'Overview of networking,\r\nOverview of workgroup,\r\nOverview of domain,\r\nOverview of client,\r\nOverview of server,\r\nProtocols and ports,\r\nOverview of Protocols and ports,\r\nOverview of Protocol types,\r\nOverview of SSH,\r\nOverview of DNS,\r\nOverview of SMTP,\r\nOverview of FTP,\r\nOverview of TFTP,\r\nOverview of TELNET,\r\nOverview of DHCP,\r\nOverview of HTTP,\r\nOverview of HTTPS,\r\nOverview of SNMP,\r\nOverview of RDP,\r\nOverview of NTP,\r\nOverview of SIP,\r\nOverview of SMB,\r\nOverview of POP3,\r\nOverview of IMAP4,\r\nOverview of ICMP,\r\nOverview of UDP,\r\nOverview of TCP,\r\nOverview of IP,\r\nOverview of HTTPS,\r\nOverview of HTTP,\r\nOverview of Connection-oriented vs. connectionless,\r\nOverview of port number classification,\r\nDevices, Applications, Protocols, and Services at Each OSI Layers,\r\nOverview of OSI model,\r\nOverview of Layer 7,\r\nOverview of Layer 6,\r\nOverview of Layer 5,\r\nOverview of Layer 4,\r\nOverview of Layer 3,\r\nOverview of Layer 2,\r\nOverview of Layer 1,\r\nDevices, Applications, Protocols, and Services at Each TCP/IP Layers,\r\nOverview of TCP/IP model,\r\nOverview of Layer 1,\r\nOverview of Layer 2,\r\nOverview of Layer 3,\r\nOverview of Layer 4 / 5,\r\nConcepts and Characteristics of Routing and Switching,\r\nOverview of network traffic,\r\nOverview of Broadcast domains,\r\nOverview of CSMA/CD,\r\nOverview of CSMA/CA,\r\nOverview of Collision domains,\r\nOverview of Protocol data units,\r\nOverview of MTU,\r\nOverview of Broadcast,\r\nOverview of Multicast,\r\nOverview of Unicast,\r\nOverview of Segmentation and interface properties,\r\nOverview of ARP table,\r\nOverview of Routing,\r\nOverview of Routing,\r\nprotocols,\r\nOverview of Distance-vector routing,\r\nprotocols,\r\nOverview of Link-state routing protocols,\r\nOverview of Routing types,\r\nOverview of Static,\r\nOverview of Dynamic,\r\nOverview of QoS,\r\nOverview of NAT/PAT,\r\nInternet Protocol Addressing,\r\nOverview of NIC,\r\nOverview of MAC address,\r\nOverview of Private vs. public,\r\nOverview of Loopback and Apipa,\r\nOverview of Default gateway,\r\nOverview of Subnet mask,\r\nOverview of Subnetting,\r\nOverview of Supernetting,\r\nOverview of Classes A, B, C, D, and E,\r\nOverview of CIDR,\r\nOverview of Address assignments,\r\nOverview of DHCP,\r\nOverview of APIPA,\r\nOverview of Loopback,\r\nCompare and Contrast the Characteristics of Network Topologies, Types and Technologies,\r\nOverview of Wired topologies,\r\nOverview of Logical vs. physical,\r\nOverview of Star,\r\nOverview of Mesh,\r\nOverview of Bus,\r\nOverview of Tree,\r\nOverview of Hybrid,\r\nOverview of Ring,\r\nOverview of Wireless topologies,\r\nOverview of Ad hoc,\r\nOverview of Infrastructure,\r\nOverview of LAN,\r\nOverview of WLAN,\r\nOverview of MAN,\r\nOverview of WAN,\r\nOverview of CAN,\r\nOverview of SAN,\r\nOverview of PAN,\r\nOverview of 802.11,\r\nWireless Technologies and Configurations,\r\nOverview of 802.11 standards:,\r\na,\r\nb,\r\ng,\r\nn,\r\nac,\r\nOverview of Frequencies:,\r\n2.4 GHz,\r\n5.0 GHz,\r\nOverview of Speed and distance requirements,\r\nOverview of Channel bandwidth,\r\nOverview of MIMO/MU-MIMO,\r\nOverview of Unidirectional/omnidirectional,\r\nCabling,\r\nOverview of Media types,\r\nOverview of Copper,\r\nOverview of UTP,\r\nOverview of STP,\r\nOverview of Coaxial,\r\nOverview of Fiber,\r\nOverview of Single-mode,\r\nOverview of Multimode,\r\nConnector types,\r\nOverview of Copper,\r\nOverview of RJ-45,\r\nOverview of RJ-11,\r\nOverview of BNC,\r\nOverview of F-type,\r\nOverview of Fiber,\r\nOverview of LC,\r\nOverview of ST,\r\nOverview of SC,\r\nOverview of MTRJ,\r\nOverview of Transceivers,\r\nOverview of SFP,\r\nOverview of SFP+,\r\nOverview of QSFP,\r\nOverview of Characteristics of fiber transceivers,\r\nOverview of Half Duplex,\r\nOverview of Full Duplex,\r\nOverview of Single mode,\r\nOverview of Multiple mode,\r\nOverview of Patch panel,\r\nOverview of Copper cable standards,\r\nOverview of Cat 3,\r\nOverview of Cat 5,\r\nOverview of Cat 5e,\r\nOverview of Cat 6,\r\nOverview of Cat 6a,\r\nOverview of Cat 7,\r\nOverview of RG-6,\r\nOverview of RG-59,\r\nOverview of Copper termination standards,\r\nOverview of TIA/EIA 568a,\r\nOverview of TIA/EIA 568b,\r\nOverview of Crossover,\r\nOverview of Straight-through,\r\nOverview of Ethernet deployment standards,\r\nOverview of 100BASE-T,\r\nOverview of 1000BASE-T,\r\nOverview of 1000BASE-LX,\r\nOverview of 1000BASE-SX,\r\nOverview of 10GBASE-T,\r\nAppropriate placement of Networking devices on a network.,\r\nFirewall,\r\nRouter,\r\nSwitch,\r\nHub,\r\nBridge,\r\nWireless access point,\r\nNetworking Attacks,\r\nOverview of DoS,\r\nOverview of DDoS,\r\nOverview of Social engineering,\r\nOverview of Rogue access point,\r\nOverview of Phishing,\r\nOverview of Ransomware,\r\nOverview of Deauthentication,\r\nOverview of Brute force,\r\nOverview of Man-in-the-middle,\r\nOverview of Exploits and vulnerabilities,\r\nConfiguration and Commands,\r\nConfiguring and managing NIC by GUI,\r\nConfiguring and managing NIC by Command,\r\nConfiguring Networking between devices,\r\nping,\r\nipconfig,\r\nipconfig /all,\r\narp,\r\ngetmac,\r\nnslookup,\r\npathping,\r\ntracert,\r\nOverview and installing cisco packet tracer,\r\nBasic router configuration,\r\nBasic switch configuration,\r\nCapturing frames,\r\nOverview of Ethernet frame', 1);
INSERT INTO `classes` (`id`, `title`, `teacherFirstName`, `teacherLastName`, `category`, `level`, `lessons`, `time`, `price`, `image`, `discount`, `Detail_Head_Title`, `detailSubtitle`, `date`, `place`, `quantity`, `language`, `title_description1`, `description1`, `title_description2`, `description2`, `title_description3`, `description3`, `title_description4`, `description4`, `headers`, `isShown`) VALUES
(27, 'دوره MCSA PACK 2019', '', '', 'شبکه', 'سخت', '584', '230', '0', '../public_html/assets/uploads/بنر دوره MCSA.jpg', '0', 'دوره کامل و جامع MCSA PACK 2019', 'دوره کامل و جامع MCSA PACK 2019', '', 'تهران', '230', 'فارسی', 'Configuring and Managing Windows Defender', '', 'Overview of Social engineering', '', 'Overview of Routing types', '', 'Overview of Protocols and ports', '', 'Key Knowledge Areas,\r\nOverview of networking,\r\nOverview of workgroup,\r\nOverview of domain,\r\nOverview of client,\r\nOverview of server,\r\nOverview of Protocols and ports,\r\nOverview of Protocol types,\r\nOverview of SSH,\r\nOverview of DNS,\r\nOverview of SMTP,\r\nOverview of FTP,\r\nOverview of TFTP,\r\nOverview of TELNET,\r\nOverview of DHCP,\r\nOverview of HTTP,\r\nOverview of HTTPS,\r\nOverview of SNMP,\r\nOverview of RDP,\r\nOverview of NTP,\r\nOverview of SIP,\r\nOverview of SMB,\r\nOverview of POP3,\r\nOverview of IMAP4,\r\nOverview of ICMP,\r\nOverview of UDP,\r\nOverview of TCP,\r\nOverview of IP,\r\nOverview of HTTPS,\r\nOverview of HTTP,\r\nOverview of Connection-oriented vs. connectionless,\r\nOverview of port number classification,\r\nOverview of OSI model,\r\nOverview of Layer 7,\r\nOverview of Layer 6,\r\nOverview of Layer 5,\r\nOverview of Layer 4,\r\nOverview of Layer 3,\r\nOverview of Layer 2,\r\nOverview of Layer 1,\r\nOverview of TCP/IP model,\r\nOverview of Layer 1,\r\nOverview of Layer 2,\r\nOverview of Layer 3,\r\nOverview of Layer 4 / 5,\r\nOverview of network traffic,\r\nOverview of Broadcast domains,\r\nOverview of CSMA/CD,\r\nOverview of CSMA/CA,\r\nOverview of Collision domains,\r\nOverview of Protocol data units,\r\nOverview of MTU,\r\nOverview of Broadcast,\r\nOverview of Multicast,\r\nOverview of Unicast,\r\nOverview of Segmentation and interface properties,\r\nOverview of ARP table,\r\nOverview of Routing,\r\nOverview of Routing,\r\nprotocols,\r\nOverview of Distance-vector routing,\r\nprotocols,\r\nOverview of Link-state routing protocols,\r\nOverview of Routing types,\r\nOverview of Static,\r\nOverview of Dynamic,\r\nOverview of QoS,\r\nOverview of NAT/PAT,\r\nOverview of NIC,\r\nOverview of MAC address,\r\nOverview of Private vs. public,\r\nOverview of Loopback and Apipa,\r\nOverview of Default gateway,\r\nOverview of Subnet mask,\r\nOverview of Subnetting,\r\nOverview of Supernetting,\r\nOverview of Classes A, B, C, D, and E,\r\nOverview of CIDR,\r\nOverview of Address assignments,\r\nOverview of DHCP,\r\nOverview of APIPA,\r\nOverview of Loopback,\r\nOverview of Wired topologies,\r\nOverview of Logical vs. physical,\r\nOverview of Star,\r\nOverview of Mesh,\r\nOverview of Bus,\r\nOverview of Tree,\r\nOverview of Hybrid,\r\nOverview of Ring,\r\nOverview of Wireless topologies,\r\nOverview of Ad hoc,\r\nOverview of Infrastructure,\r\nOverview of LAN,\r\nOverview of WLAN,\r\nOverview of MAN,\r\nOverview of WAN,\r\nOverview of CAN,\r\nOverview of SAN,\r\nOverview of PAN,\r\nOverview of 802.11,\r\nOverview of 802.11 standards:,\r\na,\r\nb,\r\ng,\r\nn,\r\nac,\r\nOverview of Frequencies:,\r\n2.4 GHz,\r\n5.0 GHz,\r\nOverview of Speed and distance requirements,\r\nOverview of Channel bandwidth,\r\nOverview of MIMO/MU-MIMO,\r\nOverview of Unidirectional/omnidirectional,\r\nOverview of Media types,\r\nOverview of Copper,\r\nOverview of UTP,\r\nOverview of STP,\r\nOverview of Coaxial,\r\nOverview of Fiber,\r\nOverview of Single-mode,\r\nOverview of Multimode,\r\nConnector types,\r\nOverview of Copper,\r\nOverview of RJ-45,\r\nOverview of RJ-11,\r\nOverview of BNC,\r\nOverview of F-type,\r\nOverview of Fiber,\r\nOverview of LC,\r\nOverview of ST,\r\nOverview of SC,\r\nOverview of MTRJ,\r\nOverview of Transceivers,\r\nOverview of SFP,\r\nOverview of SFP+,\r\nOverview of QSFP,\r\nOverview of Characteristics of fiber transceivers,\r\nOverview of Half Duplex,\r\nOverview of Full Duplex,\r\nOverview of Single mode,\r\nOverview of Multiple mode,\r\nOverview of Patch panel,\r\nOverview of Copper cable standards,\r\nOverview of Cat 3,\r\nOverview of Cat 5,\r\nOverview of Cat 5e,\r\nOverview of Cat 6,\r\nOverview of Cat 6a,\r\nOverview of Cat 7,\r\nOverview of RG-6,\r\nOverview of RG-59,\r\nOverview of Copper termination standards,\r\nOverview of TIA/EIA 568a,\r\nOverview of TIA/EIA 568b,\r\nOverview of Crossover,\r\nOverview of Straight-through,\r\nOverview of Ethernet deployment standards,\r\nOverview of 100BASE-T,\r\nOverview of 1000BASE-T,\r\nOverview of 1000BASE-LX,\r\nOverview of 1000BASE-SX,\r\nOverview of 10GBASE-T,\r\nFirewall,\r\nRouter,\r\nSwitch,\r\nHub,\r\nBridge,\r\nWireless access point,\r\nOverview of DoS,\r\nOverview of DDoS,\r\nOverview of Social engineering,\r\nOverview of Rogue access point,\r\nOverview of Phishing,\r\nOverview of Ransomware,\r\nOverview of Deauthentication,\r\nOverview of Brute force,\r\nOverview of Man-in-the-middle,\r\nOverview of Exploits and vulnerabilities,\r\nConfiguring and managing NIC by GUI,\r\nConfiguring and managing NIC by Command,\r\nConfiguring Networking between devices,\r\nping,\r\nipconfig,\r\nipconfig /all,\r\narp,\r\ngetmac,\r\nnslookup,\r\npathping,\r\ntracert,\r\nOverview and installing cisco packet tracer,\r\nBasic router configuration,\r\nBasic switch configuration,\r\nCapturing frames,\r\nOverview of Ethernet frame,\r\nOverview of Virtualization,\r\nInstalling Hyper-V and VMware Workstation,\r\nConfiguring and Managing Hyper-V and VMware Workstation,\r\nCreating Virtual Machines,\r\nConfiguring Virtual Machines,\r\nManaging Virtual Machines,\r\nConfiguring and Managing Hyper-V and VMware Workstation Storage,\r\nConfiguring Hyper-V and VMware Workstation Networking,\r\nAdvance Settings of Hyper-V and VMware Workstation,\r\nOverview of Windows 10/11 and Workgroup,\r\nNavigating the User Interface,\r\nComparing Different Versions and Architectures,\r\nOverview of Different Types of Installation,\r\nInstalling Windows 10/11,\r\nBasic Configuration,\r\nUpgrading to Windows 10/11,\r\nOverview of User and Built in Groups,\r\nCommon Configuration Options,\r\nManaging User Accounts,\r\nManaging Groups,\r\nManaging Users and Groups by Commands,\r\nCreating Mass User Creation,\r\nOverview of Different Types of Profile,\r\nManaging Local Profile,\r\nOverview of Networking,\r\nConfiguring IP Network Connectivity,\r\nConfiguring Networking and Virtual Switch,\r\nConfiguring NIC by Commands,\r\nOverview of Different Types of Storage,\r\nManaging Disks,\r\nCreating Basic Partitions,\r\nCreating Dynamic Volumes,\r\nCreating Virtual Hard Disks,\r\nManaging Partitions and Volumes,\r\nManaging Disks, Partitions and Volumes by Command,\r\nFile Systems and Allocation Unit Size,\r\nCreating and Managing Storage Spaces and Pools,\r\nAdvance Settings of Storage,\r\nOverview of File and Printers,\r\nConfiguring and Managing File Access,\r\nConfiguring and Managing Shared Folders,\r\nConfiguring and Managing Offline File,\r\nConfiguring and Managing Work Folders,\r\nConfiguring and Managing Printers,\r\nOverview of Local Group Policy,\r\nManaging Local Group Policy,\r\nConfiguring and Managing Password Policies,\r\nConfiguring and Managing Account Lockout Policies,\r\nConfiguring and Managing Audit Policies,\r\nConfiguring and Managing User Right Assignments,\r\nConfiguring and Managing Security Options,\r\nConfiguring and Managing Application Control Policies,\r\nConfiguring and Managing Administrative templates Sub Policies,\r\nOverview of Providing Apps to Users,\r\nWindows Store,\r\nWeb Browsers,\r\nOverview of Power on Self-Test,\r\nOverview of UEFI,\r\nOverview of Legacy Traditional,\r\nOverview of Data-Related Security Threats and Access Control List (ACL),\r\nOverview of Device Security,\r\nOverview of Using Security Settings to Mitigate Threats,\r\nManaging NTFS Permissions,\r\nManaging Share Permissions,\r\nSecuring Data with Encryption File System (EFS),\r\nImplementing and Managing BitLocker,\r\nManaging User Account Control,\r\nOverview of Network-Related Security Threats,\r\nConfiguring and Managing Windows Firewall,\r\nConfiguring and Managing Connection Security Rules,\r\nConfiguring and Managing Windows Defender,\r\nOverview of Devices and Drivers,\r\nSystem Image Backup,\r\nRecovering Files and Images,\r\nRestore Point,\r\nFile History,\r\nRestore Point,\r\nPrevious Version Tab,\r\nOverview of Maintenance,\r\nUpdating Windows,\r\nMonitoring Windows 10,\r\nOptimizing Performance,\r\nPerformance Monitor,\r\nResource Monitor,\r\nOverview of Windows Assessment Deployment Kit,\r\nInstalling Windows system Image Manager,\r\nCreating an Answer File by WSIM,\r\nApplying an Answer file to an image,\r\nCreating WinPE by WADK,\r\nManaging Device by WinPE,\r\nCreating Image by WinPE,\r\nOverview of Remote Desktop,\r\nConfiguring and Managing Remote Desktop,\r\nConfiguring and Managing Remote Desktop Assistance,\r\nAdvance Settings of Remote Desktop,\r\nOverview of Virtualization,\r\nInstalling Hyper-V and VMware Workstation,\r\nConfiguring and Managing Hyper-V and VMware Workstation,\r\nCreating Virtual Machines,\r\nConfiguring Virtual Machines,\r\nManaging Virtual Machines,\r\nConfiguring and Managing Hyper-V and VMware Workstation Storage,\r\nConfiguring Hyper-V and VMware Workstation Networking,\r\nAdvance Settings of Hyper-V and VMware Workstation,\r\nIntroducing Windows Server,\r\nPreparing for Upgrades and Migrations,\r\nUpgrading Windows Server,\r\nMigrating Server Roles and Workloads,\r\nManaging Windows Server,\r\nOverview of Domain,\r\nInstalling Active Directory Domain Services,\r\nCreating and Configuring Forest and Domain Controller,\r\nOverview of Active Directory Users and Computers,\r\nManaging Active Directory Container,\r\nImplementing and Managing OUs in Active Directory,\r\nCreating and Managing User Accounts in Active Directory,\r\nCreating and Managing Groups in Active Directory,\r\nManaging Computer Accounts in Active Directory,\r\nManaging Users by User Template,\r\nConfiguring and Managing Additional Domain Controllers,\r\nConfiguring and Managing Read-Only Domain Controllers,\r\nConfiguring Additional DC and RODC by IFM,\r\nPerforming Bulk Active Directory Operations,\r\nDemoting DC and Removing Metadata,\r\nJoining Computers to Domain GUI and Command,\r\nUsing Offline Join,\r\nIntroducing PowerShell in Active Directory,\r\nConfiguring and Managing Active Directory by CMD,\r\nConfiguring and Managing Active Directory by PowerShell,\r\nAdvance Settings of Active Directory,\r\nTroubleshooting Active Directory Installations,\r\nOverview of profile,\r\nConfiguring and Managing Roaming Profile,\r\nOverview of Domain Group Policy,\r\nOverview of Group Policy Storage, Linking, Hierarchy,\r\nCreating and configuring GPOs,\r\nadministering GPOs,\r\nManaging Group Policy Tabs, Inheritance, Starter GPO, Copy GPO,\r\nConfiguring and Managing WMI Filtering and Queries,\r\nConfiguring and Managing Password Policy, Lockout Policy,\r\nConfiguring and Managing Password Setting Object (PSO),\r\nConfiguring and Managing Kerberos and Audit Policy,\r\nConfiguring and Managing User Right Assignment and Delegation,\r\nConfiguring and Managing Security Options,\r\nConfiguring and Managing Restricted Group, System Service,\r\nConfiguring and Managing Firewall, App Locker,\r\nConfiguring and Managing Software Installation,\r\nOverview of Policies for Group Policy,\r\nConfiguring and Managing Loopback Processing, Replace and Merge,\r\nImplementing Administrative Templates,\r\nConfiguring and Managing Group Policy Preferences,\r\nPlanning Group Policy,\r\nConfiguring and Managing Group Policy Modeling,\r\nConfiguring and Managing Group Policy Results,\r\nBackup and Restore GPOs,\r\nOverview of Backup and Restore in Windows server,\r\nOverview of Active Directory Backup and Restore in Windows server,\r\nCreating Active Directory Full and System State Backup,\r\nOverview of Authoritative and Non-Authoritative Recovery,\r\nCreating, Managing and Restoring Active Directory Snapshot,\r\nManaging and Restoring Recycle Bin in Active Directory,\r\nChanging DSRM Password,\r\nUsing Tombstone for Recovery,\r\nOverview of Windows Server 2016 Monitoring Tools,\r\nUsing Performance Monitor,\r\nMonitoring Event Logs,\r\nEstablishing a Performance Baseline,\r\nIdentifying the Source of a Performance Problem,\r\nViewing and Configuring Centralized Event Logs,\r\nOverview of Dynamic Access Control,\r\nConfiguring and Managing DAC,\r\nOverview of NIC Teaming,\r\nConfiguring and Managing NIC Teaming,\r\nOverview of Internet Information Services (IIS),\r\nCreating and Managing Web Site in IIS,\r\nCreating and Managing Ftp Site in IIS,\r\nOverview of Authentication methods,\r\nConfiguration Authentication and Authorization,\r\nCreating and Managing Virtual Directory,\r\nCreating and Managing Application Pool,\r\nManaging Limits,\r\nCreating HTTPS Site with Self-Sign Certificate,\r\nOverview of the DHCP Role Service,\r\nPlanning a DHCP Server Implementation,\r\nInstalling and Configuring DHCP Server,\r\nValidating the DHCP Server Implementation,\r\nCreating and Managing Scopes and Options,\r\nCreating and Managing Super Scope,\r\nCreating and Managing Multicast Scope,\r\nCreating and Managing Split Scope,\r\nCreating and Managing Failover by Built in DHCP Failover,\r\nCreating and Managing DHCP Policies,\r\nManaging DHCP by Commands,\r\nMonitoring DHCP,\r\nAdvance Settings of Dynamic Host Configuration Protocol,\r\nOverview of NetBIOS Name,\r\nOverview of Fully Qualify Domain Name,\r\nOverview of DNS and WINS Servers,\r\nPlanning DNS Name Resolution,\r\nImplementing DNS servers,\r\nOverview of Standard and Active Directory Integrated Zones,\r\nOverview of Forward Look up Zone and Revers Lookup Zone,\r\nConfiguring and Managing Primary Zone,\r\nCreating and Managing Secondary Zone,\r\nCreating and Managing Stub Zone,\r\nOverview of Records,\r\nManaging A, AAAA, CNAME, PTR, MX and SRV Records,\r\nManaging DNS Zone Tabs,\r\nManaging DNS Server Tabs,\r\nManaging Advanced DNS Settings,\r\nOverview of Recursive and Iterative,\r\nConfiguring and Managing Caching Only DNS Server,\r\nConfiguring and Managing Root DNS Server,\r\nConfiguring and Managing DNS Delegation,\r\nConfiguring and Managing DNS Policies,\r\nConfiguring and Managing Global Name Zone,\r\nConfiguring and Managing Forwarder and Conditional Forwarder,\r\nConfiguring and Managing Advance Round Robin by PowerShell and Policies,\r\nOverview of DNS Threats and Mitigations,\r\nSecuring DNS Server,\r\nTroubleshooting DNS,\r\nAdvance Settings of Domain Name Service,\r\nOverview of IPAM,\r\nDeploying IPAM,\r\nInstalling and Configuring IPAM Server,\r\nManaging IP Address Spaces and Blocks by Using IPAM,\r\nManaging DHCP Servers by Using IPAM,\r\nManaging DNS Servers by Using IPAM,\r\nAdvance Settings of Internet Protocol Address Management,\r\nOverview of Routing and Remote Access in Windows Server,\r\nImplementing Network Address Translation (NAT),\r\nOverview of Routing,\r\nConfiguring and Managing Server as a Router,\r\nConfiguring Static Route,\r\nConfiguring Dynamic Routing Protocol,\r\nOverview of Virtual Private Network (VPN),\r\nOverview of VPN Tunneling Protocols,\r\nOverview of VPN Authentication Protocols,\r\nConfiguring and Managing VPN Remote Access,\r\nConfiguring and Managing VPN Site to Site,\r\nConfiguring and Managing Radius Server,\r\nConfiguring and Managing NPS Server,\r\nConfiguring and Managing DHCP Relay Agent,\r\nAdvance Settings of Routing and Remote Access Server,\r\nOverview of Disk Quota,\r\nConfiguring and Managing Disk Quota,\r\nOverview of File Server Resource Manager (FSRM),\r\nConfiguring and Managing Folder Quota,\r\nConfiguring and Managing a File screening to a Volume or Folder,\r\nConfiguring and Managing Storage Reports Management,\r\nManaging Quota and File Screening Templates,\r\nAdvance Settings of File Server Resource Manager,\r\nOverview of Distributed File System (DFS) and DFS-Replication,\r\nConfiguring and Managing DFS Namespaces,\r\nConfiguring and Managing DFS Replication,\r\nManaging DFS Replication Groups,\r\nConfiguring Advance Tabs of DFS,\r\nOverview of Server Core,\r\nInstalling Server Core,\r\nManaging Server Core,\r\nConfiguring Server Core,\r\nUsing CMD and PowerShell to Configure Server Core,\r\nUsing Remote Access to Configure Server Core,\r\nInstalling Active Directory on a Server Core,\r\nConfiguring and Managing Server Core as a Domain Controller,\r\nConfiguring and Managing Server Core as an Additional Domain Controller,\r\nConfiguring and Managing Server Core as a Read Only Domain Controller,\r\nOverview of Nano Server,\r\nPreparing and Creating Nano Server,\r\nInstalling Nano Server,\r\nManaging Nano server by Remote PowerShell,\r\nManaging Nano server by Remote Server Manager,\r\nUsing Offline Join to Join Nano Server,\r\nOverview of Service Account,\r\nManaging Service Accounts,\r\nCreating and Managing Standalone Managed Service Account (sMSA),\r\nCreating and Managing Group Managed Service Account (gMSA),\r\nCreating and Managing Virtual Group Service Account,\r\nOverview of BranchCache,\r\nPlanning for BranchCache Design,\r\nCreating and Managing Distributed,\r\nCreating and Managing Hosted cache modes,\r\nTroubleshoot BranchCache,\r\nAdvance Settings of BranchCache,\r\nOverview of Root Tree Domains and Child Domains,\r\nConfiguring and Managing Child Domain Controllers,\r\nConfiguring and Managing Root Tree Domain Controllers in the Same Forest,\r\nOverview of Forest, External, Realm, Parent-Child, Root Tree Domain and Shortcut Trusts,\r\nConfiguring and Managing Forest, External, Realm, and Shortcut Trusts,\r\nConfiguring and Managing Forest-Wide Authentication and Selective authorization,\r\nConfiguring and Managing SID Filtering,\r\nConfiguring and Managing Name Suffix Routing,\r\nAdvance Settings of Active Directory Domain and Trust,\r\nOverview of Active Directory Domain Controllers Replication,\r\nConfiguring and Managing Active Directory Sites,\r\nConfiguring and Managing Active Directory Subnets,\r\nConfiguring and Managing Site Links,\r\nOverview of Knowledge Consistency Checker,\r\nConfiguring and Managing Replication Topology,\r\nOverview of Active Directory Partitions,\r\nConfiguring and Managing AD DS Intra-Site Replication,\r\nConfiguring and Managing AD DS Inter-Site Replication,\r\nCreating and Managing Site Link Bridges,\r\nManage Registration of SRV Records,\r\nManaging Replication by Command,\r\nMonitoring and Troubleshooting ADDS Replication,\r\nAdvance Settings of Active Directory Site and service,\r\nOverview of Encryption,\r\nOverview of Symmetric and Asymmetric Encryption,\r\nOverview of Certificate and Digital Signature,\r\nOverview of ADCS Role Service,\r\nChoosing between a standalone and an enterprise CA,\r\nChoosing between a root and a subordinate CA,\r\nOverview of different role Service of ADCS,\r\nInstalling and Configuring Certificate Authority,\r\nConfiguring and Managing Online Root and Subordinate CAs,\r\nInstalling and Configuring Offline Root and Subordinate CAs,\r\nConfiguring and Managing Certificate Templates,\r\nEnrolling Certificate Manually,\r\nAuto Enrolling Certificate by GPO,\r\nInstalling and Configuring CA Web Enrollment Role Service,\r\nEnrolling Certificate by using CA Web Enrollment,\r\nExporting and Importing Certificates,\r\nUsing Internal CA for Publishing a HTTPS Web Site,\r\nUsing Internal CA for Publishing a HTTPS Web Site,\r\nConfiguring and Managing CRL and CDP,\r\nConfiguring and Managing and manage key archival and recovery,\r\nInstalling and Configuring Online Responder Role Service,\r\nManaging Online Responder,\r\nConfiguring CA Backup and Recovery,\r\nTroubleshooting and Maintaining CAs,\r\nAdvance Settings of Active Directory Certificate Service,\r\nOverview of DNS Threats and Vulnerabilities,\r\nOverview of DNSSEC,\r\nConfiguring and Managing DNSSEC,\r\nOverview of ADRMS,\r\nInstalling ADRMS,\r\nConfiguring and Managing ADRMS,\r\nConfiguring and Managing Rights Policy Templates,\r\nConfiguring and Managing Exclusion Policies,\r\nConfiguring and Managing Security Policies,\r\nADRMS Backup and Restore,\r\nConfiguring Client Side to Use ADRMS,\r\nUsing ADRMS on Clients to Protect Data,\r\nAdvance Settings of Active Directory Rights Management Services,\r\nOverview of SMB and NFS,\r\nConfiguring and Managing Share Folders,\r\nOverview of DAS, NAS, and SANs,\r\nComparing Fiber Channel, iSCSI, and Fiber Channel over Ethernet,\r\nUnderstanding iSNS, DCB, and MPIO,\r\nPlanning Storage Requirements,\r\nConfiguring and Managing iSCSI Target Server,\r\nOverview of Storage Replica,\r\nConfiguring and Managing Storage Replica,\r\nOverview of Data Deduplication,\r\nConfiguring and Managing Data Deduplication for General Usage,\r\nOverview of Failover Cluster,\r\nPlanning a Failover Cluster,\r\nConfiguring and Managing Failover Cluster,\r\nConfiguring and Managing Cluster Networking,\r\nConfiguring and Managing Cluster Storage,\r\nConfiguring and optimizing Clustered Shared Volumes (CSVs),\r\nConfiguring and Managing Quorum,\r\nConfiguring and Managing Failover Cluster for DHCP,\r\nConfiguring and Managing Failover Cluster for File Server,\r\nVerifying High Availability,\r\nMaintaining and Troubleshooting Failover Cluster,\r\nAdvance Settings of Failover Cluster,\r\nOverview of NLB,\r\nConfiguring NLB Cluster,\r\nPlanning NLB Implementation,\r\nConfiguring and Managing the NLB Cluster,\r\nManaging Cluster Operation Modes,\r\nManaging Cluster Filtering Modes,\r\nValidating High Availability for NLB Cluster,\r\nOverview of Flexible Single Master Operations,\r\nManaging Domain Naming and Schema Operation Master Roles,\r\nConfiguring and Managing RID, PDC and Infrastructure Operation Master Roles,\r\nTransferring Operation Master Roles GUI,\r\nTransferring Operation Master Roles Command,\r\nSeizing Operation Master Roles,\r\nOverview of Domain and Forest Functional Level,\r\nManaging Domain Functional Level,\r\nManaging Forest Functional Level,\r\nOverview of Active Directory Nested Groups,\r\nManaging Universal, Global and Local Groups,\r\nManaging Security and Distribution Groups,\r\nOverview of Renaming Domain Controller Name,\r\nRenaming Domain Controller Name', 1),
(28, 'Installing and Configuring Windows 10', '', 'آقاپور', 'سواد رسانه', 'متوسط', '108', '42', '0', '../public_html/assets/uploads/InstallingWindows10.png', '0', 'دوره کامل نصب و کانفیگ کردن ویندوز 10', 'دوره کامل نصب و کانفیگ کردن ویندوز 10', '', 'تهران', '108', 'فارسی', 'Overview of Virtualization', '', 'Common Configuration Options', '', 'Implementing Group Policy', '', 'Overview of Device Security', '', 'Virtualization,\r\nOverview of Virtualization,\r\nInstalling Hyper-V and VMware Workstation,\r\nConfiguring and Managing Hyper-V and VMware Workstation,\r\nCreating Virtual Machines,\r\nConfiguring Virtual Machines,\r\nManaging Virtual Machines,\r\nConfiguring and Managing Hyper-V and VMware Workstation Storage,\r\nConfiguring Hyper-V and VMware Workstation Networking,\r\nAdvance Settings of Hyper-V and VMware Workstation,\r\nInstalling Windows 10,\r\nOverview of Windows 10/11 and Workgroup,\r\nNavigating the User Interface,\r\nComparing Different Versions and Architectures,\r\nOverview of Different Types of Installation,\r\nInstalling Windows 10/11,\r\nBasic Configuration,\r\nUpgrading to Windows 10/11,\r\nUsers, Groups and Profile,\r\nOverview of User and Built in Groups,\r\nCommon Configuration Options,\r\nManaging User Accounts,\r\nManaging Groups,\r\nManaging Users and Groups by Commands,\r\nCreating Mass User Creation,\r\nOverview of Different Types of Profile,\r\nManaging Local Profile,\r\nNetwork Connectivity,\r\nOverview of Networking,\r\nConfiguring IP Network Connectivity,\r\nConfiguring Networking and Virtual Switch,\r\nConfiguring NIC by Commands,\r\nStorage,\r\nOverview of Different Types of Storage,\r\nManaging Disks,\r\nCreating Basic Partitions,\r\nCreating Dynamic Volumes,\r\nCreating Virtual Hard Disks,\r\nManaging Partitions and Volumes,\r\nManaging Disks, Partitions and Volumes by Command,\r\nFile Systems and Allocation Unit Size,\r\nCreating and Managing Storage Spaces and Pools,\r\nAdvance Settings of Storage,\r\nStorage Managing Files and Printers,\r\nOverview of File and Printers,\r\nConfiguring and Managing File Access,\r\nConfiguring and Managing Shared Folders,\r\nConfiguring and Managing Offline File,\r\nConfiguring and Managing Work Folders,\r\nConfiguring and Managing Printers,\r\nImplementing Group Policy,\r\nOverview of Local Group Policy,\r\nManaging Local Group Policy,\r\nConfiguring and Managing Password Policies,\r\nConfiguring and Managing Account Lockout Policies,\r\nConfiguring and Managing Audit Policies,\r\nConfiguring and Managing User Right Assignments,\r\nConfiguring and Managing Security Options,\r\nConfiguring and Managing Application Control Policies,\r\nConfiguring and Managing Administrative templates Sub Policies,\r\nManaging Apps in Windows 10,\r\nOverview of Providing Apps to Users,\r\nWindows Store,\r\nWeb Browsers,\r\nBIOS,\r\nOverview of Power on Self-Test,\r\nOverview of UEFI,\r\nOverview of Legacy Traditional,\r\nSecurity	,\r\nOverview of Data-Related Security Threats and Access Control List (ACL),\r\nOverview of Device Security,\r\nOverview of Using Security Settings to Mitigate Threats,\r\nManaging NTFS Permissions,\r\nManaging Share Permissions,\r\nSecuring Data with Encryption File System (EFS),\r\nImplementing and Managing BitLocker,\r\nManaging User Account Control,\r\nOverview of Network-Related Security Threats,\r\nConfiguring and Managing Windows Firewall,\r\nConfiguring and Managing Connection Security Rules,\r\nConfiguring and Managing Windows Defender,\r\nTroubleshooting and Recovery,\r\nOverview of Devices and Drivers,\r\nSystem Image Backup,\r\nRecovering Files and Images,\r\nRestore Point,\r\nFile History,\r\nRestore Point,\r\nPrevious Version Tab,\r\nMaintaining Windows 10,\r\nOverview of Maintenance,\r\nUpdating Windows,\r\nMonitoring Windows 10,\r\nOptimizing Performance,\r\nPerformance Monitor,\r\nResource Monitor,\r\nWindows Assessment Deployment Kit (WADK),\r\nOverview of Windows Assessment Deployment Kit,\r\nInstalling Windows system Image Manager,\r\nCreating an Answer File by WSIM,\r\nApplying an Answer file to an image,\r\nCreating WinPE by WADK,\r\nManaging Device by WinPE,\r\nCreating Image by WinPE,\r\nRemote Desktop,\r\nOverview of Remote Desktop,\r\nConfiguring and Managing Remote Desktop,\r\nConfiguring and Managing Remote Desktop Assistance,\r\nAdvance Settings of Remote Desktop', 1),
(31, 'CCNP Enterprise Package', '', '', 'شبکه', 'متوسط', '27', '160', '0', '../public_html/assets/uploads/CCNP.png', '0', 'دوره CCNP', 'دوره CCNP مخفف عبارت Cisco Certified Network Professional به معنی گواهینامه حرفه‌ای شبکه است که توسط شرکت سیسکو ارائه می‌شود. این دوره یکی از معتبرترین و رده‌بالاترین دوره‌های آموزشی در زمینه مهندسی شبکه است که توسط آموزشگاه‌های مختلف و معتبر در ایران نیز به علاقمندان آموزش داده می‌شود.', '0', 'تهران', '', 'فارسی', 'Virtualization', '', 'Enterprise network design such as Tier 2, Tier 3, and Fabric Capacity planning', '', 'High availability techniques such as redundancy, FHRP, and SSO', '', 'Location services in a WLAN design', '', 'SD-WAN control and data planes elements,Traditional WAN and SD-WAN solutions ,SD-Access control and data planes elements ,  Traditional campus interoperating with SD-Access ,  	QoS components , QoS policy Process and CEF , MAC address table and TCAM , FIB vs. RIBVirtual machine ,Virtual switching , VRF	GRE and IPsec tunneling , Explain the different design principles used in an enterprise network , Analyze design principles of a WLAN deployment , •	Explain the working principles of the Cisco SD-WAN solution , •	Explain the working principles of the Cisco SD-Access solution , •	Describe concepts of wired and wireless QoS , •	Differentiate hardware and software switching mechanisms', 1),
(30, 'دوره مبتدی تا پیشرفته vmware', '', '', 'مجازی سازی', 'آسان', '17', '0', '0', '../public_html/assets/uploads/بنر دوره مبتدی تا پیشرفته vmware.png', '0', 'دوره مبتدی تا پیشرفته vmware', 'وی‌ام‌ویر یک نرم افزار ساده برای مجازی سازی سیستم شماست که با کمک آن می‌توانید چندین ماشین مجازی (VM) را روی سیستم عامل کامپیوتر شخصی یا لپ تاپ خود اجرا کنید. نرم افزار Vmware یکی از  قدرتمند ترین نرم افزارهای مجازی سازی می باشد که حدودا از سال 2005 کار خود را شروع کرده است و در این مدتی که در میان کاربران مورد استفاده قرار میگیرد توانسته جوایز زیادی را از مدیران IT دریافت کند .', '0', 'تهران', '', 'فارسی', 'معرفی VMware Horizon', '', 'معرفی موارد استفاده از VMware Horizon', '', 'استفاده از vSphere برای VMware Horizon', '', ' VMware Horizon Agent ها', '', 'دسکتاپ های VMware Horizon, VMware Horizon Pool ها , گزینه های انتخابی VMware Horizon Client , ساخت و مدیریت Desktop Pool های Instant-Clone , ایجاد RDS Desktop Pool و Application Pool ,پایش و نظارت VMware Horizon ,  Horizon Connection Server , احراز هویت و گواهینامه ها , امنیت Horizon , ', 1),
(32, 'دوره PHP مقدماتی', '', '', 'برنامه نویسی', 'آسان', '45', '110', '0', '../public_html/assets/uploads/بنر دوره PHP.jpg', '', 'دوره php', 'در دنیای امروز هر کسی از برنامه‌های کاربردی تحت وب استفاده می‌کند و از این رو نیاز سازمان‌ها به برنامه‌نویسان ماهر این حوزه روز به روز بیشتر می‌شود. سادگی توزیع و انتشار برنامه‌های تحت وب و افزایش ضریب نفوذ اینترنت در بین کاربران باعث رشد روزافزون این برنامه‌ها شده است. پی‌اچ‌پی یک زبان برنامه‌نویسی شیءگرا است که عموما برای تولید برنامه‌های کاربردی تحت وب توسعه داده شده است اما می‌توان از آن به عنوان یک زبان برنامه‌نویسی عمومی هم استفاده کرد. از این رو درصد قابل توجهی از وب‌سایت‌های دنیا با زبان PHP توسعه داده شده‌اند و شرکت‌های بزرگی در جهان از جمله فیسبوک، اسلک، ویکی‌پدیا و... ', '', 'تهران', '', 'فارسی', 'آشنایی با مفاهیم کلی برنامه‌نویسی وب', 'این دوره پیش‌نیاز خاصی ندارد و در طول دوره شما با مفاهیم اولیه برنامه‌نویسی آشنا خواهید شد.', 'یادگیری زبان برنامه‌نویسی PHP', '', ' مهارت کافی در استفاده از فریم‌ورک Laravel', '', 'توانایی طراحی و توسعه برنامه‌های کاربردی تحت وب', '', '', 1),
(33, 'دوره پایتون (جنگو)', '', '', 'برنامه نویسی', 'آسان', '15', '0', '0', '../public_html/assets/uploads/بنر دوره پایتون (جنگو).jpg', '0', 'دوره مقدماتی تا پیشرفته django', 'python , django', '', 'تهران ', '', 'فارسی', 'مقدمه‌ای بر جنگو', '', 'معماری مدل-دید-قالب', '', 'مدل‌ها در جنگو', '', 'دیدها در جنگو', '', 'قالب‌ها در جنگو , امکانات مدیریت سایت در جنگو , فرم‌ها برای ورود اطلاعات , مدل‌های پیشرفته , دیدهای پیشرفته , قالب‌های پیشرفته  , مدیریت پیشرفته‌ی سایت با اَدمین , دیدهای مبتنی بر کلاس , مدیریت پیشرفته‌ی کاربران ,  فرم‌های پیشرفته , ارتباط جنگو با پایگاه‌های داده MySQL، PostgreSQL و MariaDB', 1),
(34, 'دوره مجازی سازی', '', '', 'مجازی سازی', 'آسان', '10', '12', '0', '../public_html/assets/uploads/بنر دوره مجازی سازی.jpg', '', '', 'مجازی سازی یکی از تکنولوژی‌های نوظهور در دنیای IT است. دانش و تکنیکی که با استفاده از آن می‌توان بر بسیاری از مشکلات و موانع موجود در عرصه زیرساخت‌ها (نرم افزاری و سخت افزاری) فائق آمد و راه را برای توسعه پایدار و به وجود آوردن شرایط مناسب برای کسب و کار به بهترین نحو فراهم کرد.کاربردهای مجازی سازی آن‌چنان گسترده است که نه تنها متخصصان و کارشناسان حوزه IT بلکه بسیاری از افراد در رشته‌های غیر مرتبط با کامپیوتر و فناوری اطلاعات هم از این فناوری در حوزه خود استفاده می‌کنند. مجازی سازی فناوری است که به کمک آن می‌توان اجزاء فیزیکی یک رایانه را به شکل مجازی در اختیار چندین سیستم‌عامل یا نرم‌افزار قرارداد و به نوعی می‌توان محدودیت‌های سخت‌افزاری موجود را تا حد زیادی مرتفع کرد.VCP-DCV از سری مدارک محبوب شرکت VMWare است که نقطه شروع ایده‌آلی برای ورود به دنیای مجازی‌سازی خواهد بود. دانشجویان با گذراندن دوره VMWare vSphere: Install, Configure, Manage  در واقع مدرک VMware VCP-DCV 2020 را دریافت می‌کنند. همانطور که از نام این دوره قابل دریافت است افراد با گذراندن این دوره آموزشی 6۰ ساعته ضمن آشنایی با مفاهیم و کاربردهای اصلی مجازی سازی؛ با نصب، پیکربندی و مدیریت سرویس‌های مجازی مبتنی بر vSphere که بنیاد و اساس زیر ساخت مجازی سازی شرکت VMWare است و در پایان می‌توانند به عنوان مدیر زیرساخت‌های مبتنی بر این مجموعه در سازمان‌ها مشغول فعالیت شوند.این دوره بر موضوعاتی از قبیل نصب و پیکربندی و مدیریت VMware vSphere  تمرکز دارد که شامل VMware ESXi  و VMware vCenter Server  است. این دوره شما را برای مدیریت زیرساخت vSphere آماده می کند.  این دوره پایه و اساس بسیاری از فناوری های VMware در مفهوم جدید Software Defined Data Center است.', '', '', '', '', 'معرفی vSphere و Software Defined Data Center', '', 'ماشین مجازی', '', 'vCenter Server', '', 'پیکربندی و مدیریت Virtual Network ها', '', 'پیکربندی و مدیریت Virtual Storage  , مدیریت ماشین مجازی , مدیریت منابع و مانیتورینگ , vSphere Cluster ها , vSphere Lifecycle Management , شناخت اهمیت vCenter Server Update Planner\n• توصیف چگونگی کارکرد VMware vSphere Lifecycle Manager\n• توصیف چگونگی بروزرسانی ESXi Host ها با استفاده از Baseline ها\n• اعتبارسنجی تطابق ESXi Host با یک Cluster Image\n• توصیف چگونگی ارتقای VMware Tools و VM Hardware\n• توصیف یکپارچگی VMware vSphere Lifecycle Manager و VMware vSAN\n, \n• توصیف کارکردهای یک vSphere DRS Cluster\n• ایجاد یک vSphere DRS Cluster\n• پایش پیکربندی vSphere Cluster\n• توصیف گزینه ها برای ایجاد یک محیط vSphere با High Availability \n• توضیح معماری vSphere HA\n• پیکربندی و مدیریت vSphere HA Cluster \n• بررسی ویژگی ها و کارکردهای VMware vSphere Fault Tolerance \n• توصیف کارکرد vSphere Cluster Service \n', 1),
(35, 'دوره (ECSA) EC-Council Certified Security Analyst ', '', '', 'امنیت', 'آسان', '16', '40', '0', '../public_html/assets/uploads/بنر دوره ECSA.jpg', '0', 'دوره (ECSA) ', 'دوره (ECSA) EC-Council Certified Security Analyst به مرحله تحلیلی هک قانونمند توجه می‌کند. دوره CEH، ابزارها و روش‌های هک را توضیح می‌دهد اما در دوره ECSA، نحوه تحلیل خروجی‌های این ابزارها و روش‌های آن شرح داده می‌شود. با استفاده از روش‌ها و تکنیک‌های تست نفوذ، دوره ECSA به شما کمک می‌کند تا ارزیابی‌های عمیق‌تری بر روی امنیت انجام دهید', '', 'تهران ', '', 'فارسی', 'Security Analysis and Penetration Testing Methodologies', '', 'TCP IP Packet Analysis', '', 'Pre-penetration Testing Steps', '', 'Information Gathering Methodology', '', 'Vulnerability Analysis ,  External Network Penetration Testing Methodology , Internal Network Penetration Testing Methodology , Firewall Penetration Testing Methodology , IDS Penetration Testing Methodology ,  Web Application Penetration Testing Methodology ,  SQL Penetration Testing Methodology ,  Database Penetration Testing Methodology , Wireless Network Penetration Testing Methodology , Cloud Penetration Testing Methodology , Report Writing and Post Test Actions ', 1),
(36, 'دوره تحلیل بدافزار ', '', '', 'امنیت', 'آسان', '22', '', '0', '../public_html/assets/uploads/بنر دوره تحلیل بد افزار.jpg', '0', 'تحلیل بدافزار', 'تحلیل بدافزار یکی از تخصص های خیلی خاص در حوزه امنیت اطلاعات است که کمتر کسی به سمت و سوی آن کشیده می شود. در دوره آموزش تحلیل بدافزار | Malware Analysis ما از ماهیت بدافزار ، انواع بدافزار ، تشخیص وجود بدافزار تا تحلیل کردن پردازش ها و شناخت روش عملکرد بدافزارها و ... را به شما آموزش می دهیم . در پایان این دوره آموزش Malware Analysis شما تبدیل به یک کارشناس تحلیل بدافزار حرفه ای خواهید شد.این دوره پیش نیاز خاصی ندارد', '', 'تهران ', '', 'فارسی', 'جمع آوری Signature', 'افراد علاقمند به مباحث فارنزیک', 'شناخت انواع Malware', 'کارشناسان SOC و واحد پاسخگویی به حوادث', 'تحلیل توسط hashing', 'کارشناسان تست نفوذ (پاک کردن رد پا)', 'طراحی لابراتوار تحلیل بدافزار', '', 'پیدا نمودن String  , unpack کردن , شناسایی Dependency , 	PE file Section , 	Resource Hacker , ساختار داخلی سیستم عامل , مانیتورینگ Process ها , آموزش ابزار Process Explorer , آموزش تحلیل Registry , DNS spoofing , Inetsim , آموزش ابزار systracer , آموزش ابزار Fiddler , تحلیل با wireshark , Memory Dump , Process Injection ,  SSDEEP ', 1),
(37, 'دوره Splunk  مبتدی تا پیشرفته', '', '', '', 'آسان', '14', '0', '0', '../public_html/assets/uploads/بنر دوره splunk.jpg', '0', 'دوره Splunk ', 'یکی از بهترین و قویترین نرم افزار های جهت بررسی و نظارت و آنالیز اطلاعات بزرگ می باشد. این دوره به شما امکان  راه اندازی سرویس های جدید، سرعت عمل بالا و پردازش جامع اطلاعات در این نرم افزار را فراهم می کند. همچنین معرفی ویژگی های جدید، بهینه سازی و نصب و راه اندازی Splunk 7 بررسی خواهد شد.', '', 'تهران ', '', 'فارسی', 'The Splunk Interface', 'مخاطبان : کارشناسان امنیت ^ \nکارشناسان واحد SOC\n', ' Understanding Search', '', 'Tables, Charts, and Fields', '', 'Data Models and Pivots', '', 'Simple XML Dashboards , Advanced Search Examples , Advanced Search Examples ,  Extending Search , Working with Apps ,  Building Advanced Dashboards , Summary Indexes and CSV Files , Configuring Splunk , Advanced Deployments , Extending Splunk , Machine Learning Toolkit', 1),
(52, 'دوره آموزشی لغات انگلیسی', ' روح اله ', 'حسین پور', 'انگلیسی', 'آسان', '70', '70', '0', '../public/assets/uploads/english.jpg', '0', 'پکیج کامل آموزش زبان انگلیسی', '•	آموزش لغات انگلیسی ', '', 'تهران ', '', 'انگلیسی', 'آموزش لغت انگلیسی پرکاربرد', '', 'مفید‌ترین روش‌های آموزش لغت انگلیسی', '', 'کتاب 1100', '', 'کتاب 4000', '', 'Cambridge Vocabulary for IELTSکتاب  , کتاب 504 ', 1),
(53, 'پک برنامه نویسی جاوا ', '', '', 'برنامه نویسی', 'آسان', '20', '40', '0', '../public/assets/what-is-java-image.png', '0', 'برنامه نویسی جاوا', 'پک برنامه نویسی جاوا براساس مدارک رسمی شرکت اوراکل ', '2024 12 5 ', 'تهران ', '', 'فارسی', '', 'مخاطبین : افراد علاقمند به یادگیری برنامه نویسی براساس زبان جاوا ( از پایه تا حرفه ای)\n\n', '', '', '', '', '', '', 'پیشنیاز : آشنایی با مبانی برنامه نویسی (الگوریتم، گسسته، پایگاه داده و...)\n', 1),
(54, 'دوره CHFI', '', '', 'امنیت', 'متوسط', '20', '40', '0', '../public/assets/uploads/chfi-logo1.jpg', '0', 'CHFI ', '(دوره بازرس قانونی جرائم رایانه ای) ', '2024 12 5 ', 'تهران ', '', 'فارسی', '', 'پیش نیاز دوره ^\nآشنایی با انواع تهدیدات پیرامون شبکه\nآشنایی با انواع تهدیدات پیرامون برنامه های کاربردی\nدوره CEH\n', '', 'مخاطبین دوره ^ \nافراد علاقمند به مباحث فارنزیک\nکارشناسان SOC و واحد پاسخگویی به حوادث\nکارشناسان تست نفوذ (پاک کردن رد پا)\n\n', '', '', '', '', '', 1),
(55, 'دوره تست نفوذ وب ', '', '', 'امنیت', 'متوسط', '12', '40', '0', '../public/assets/uploads/OWASP-Blog-min.png', '0', 'تست نفوذ وب ', 'تست آسیب پذیری های مختلف وب براساس متدولوژی OWASP ', '2024 12 5 ', 'تهران ', '', 'فارسی', '', '', '', 'دوره تست نفوذ وب به افراد توانایی تست آسیب پذیری های مختلف وب براساس متدولوژی OWASP را می دهد در دوره تست نفوذ وب 10 آسیب پذیری برتر دنیا یا همان OWASP TOP 10 بررسی می شود، کلیه مراحل تست به صورت دستی و یا با استفاده از ابزار Burp Suite انجام می شود. هدف دوره تربیت کارشناس تست نفوذ وب می باشد که بتواند یک سامانه تحت وب را بررسی و گزارشی کامل ارائه دهد.', '', 'مخاطبین دوره ^\nافراد علاقمند به تست نفوذ برنامه های تحت وب 	برنامه نویسان تحت وب\n\n', '', 'پیش نیاز دوره : ^\nآشنایی با یکی از زبان های برنامه نویسی (php, aspx, jsp)\nآشنایی با زبان های برنامه نویسی HTML/ JAVA/ Script\n\n', '', 1),
(56, 'دوره تست نفوذ با پایتون ', '', '', 'امنیت', 'متوسط', '12', '40', '0', '../public_html/assets/uploads/python.png\n', '0', 'تست نفوذ ', '. هدف این دوره آموزش افراد برای نوشتن ابزارهای تست نفوذ در زمینه تست شبکه و نفوذ وب می باشد', '2024 12 5 ', 'تهران ', '', 'فارسی', '', '', '', 'دوره تست نفوذ با پایتون توسط موسسه نورانت طراحی شده است. هدف این دوره آموزش افراد برای نوشتن ابزارهای تست نفوذ در زمینه تست شبکه و نفوذ وب می باشد. پس از این دوره تست نفوذ با پایتون افراد می توانند تمامی مراحل تست نفوذ را توسط ابزارهایی که خودشان نوشته اند انجام دهند.\nپیش از آموزش دوره تست نفوذ با پایتون به افرا توصیه می شود زبان برنامه نویسی Python را فرا گیرند.\n', '', 'مخاطبین دوره  : ^ \nکارشناسان تست نفوذ\nعلاقمندان به نوشتن ابزارهای تست وب\nعلاقمندان به نوشتن ابزارهای تست شبکه\n', '', 'پیش نیاز دوره : ^\nتست نفوذ سیستم عامل\nتست نفوذ شبکه\nتست نفوذ وب\n', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `name` mediumtext NOT NULL,
  `job` mediumtext NOT NULL,
  `comment` mediumtext NOT NULL,
  `image` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `name`, `job`, `comment`, `image`) VALUES
(1, 'مهسا محمدی', 'برنامه نویس فرانت اند', 'من دوره وب پک 1 رو رفتم و به نظرم نقطه قوت این دوره کامل بودنش بود', '/assets/aiPics/womanProf1.jpeg'),
(7, 'آرتین شاهی', 'برنامه نویس', 'استادان با تجربه، مطالب کاربردی \r\nنایسسس!!\r\n', '/assets/aiPics/manProf5.jpeg'),
(8, 'محمد خرسندی', 'برنامه نویس وب', 'طول دوره مرتب بود و مطالب نظم خوبی داشت', '/assets/aiPics/manProf6.jpeg'),
(2, 'علی کاظمی‌راد', 'پروداکت دیزاین', 'من دوره نتورک پلاس شرکت کردم و به خاطر مدرس خوب من خیلی راحت با مطالب ارتباط برقرار کردم', '/assets/aiPics/manProf1.jpeg'),
(3, 'حسین موسوی', 'دبیر زبان انگلیسی', 'خیلی خوب بود دوره فارسی به این کاملی کم پیدا میشه!', '/assets/aiPics/manProf2.jpeg'),
(4, 'مریم اسماعیلی', 'برنامه نویس فرانت اند', 'محیط کلاس آروم بود و به نظرم این مورد خیلی مهمه', '/assets/aiPics/womanProf2.jpeg'),
(5, 'امین پارسافر', 'برنامه نویس وب', 'همه چیز خوب بود به جز اینکه ظرفیت دوره ها سریع پر میشه!!!!', '/assets/aiPics/manProf3.jpeg'),
(6, 'ابوالفضل جلیلی', 'دبیر زبان انگلیسی', 'من دوره ها رو به صورت حضوری شرکت میکنم و یه نکته بود که من رو خیلی جذب کرد اونم نحوه برخورد پرسنل بود.', '/assets/aiPics/manProf4.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `name` mediumtext NOT NULL,
  `job` mediumtext NOT NULL,
  `comment` mediumtext NOT NULL,
  `profile` mediumtext NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`name`, `job`, `comment`, `profile`, `id`) VALUES
('عماد ابوالفتحی', 'برنامه نویس وب', 'من تو اول مسیرم برای شروع برنامه نویسی هیچ ایده ای نداشتم که باید چیکار بکنم یا از کجا شروع کنم\nتا اینکه با موسسه صدرا آشنا شدم. صدرا بهم مسیر داد خط فکری داد و بعد ازاون رشدم داد .\nجدا از مهارت های فنی  صدرا شخصیتمم هم پرورش داد.\nواقعا خوشحالم از اینکه با اینجا آشنا شدم و باهاشون همکاری میکنم.\n', '/assets/aiPics/manProf7.jpeg', 1),
('حسین یاراحمدی', 'دیزاینر', 'موسسه صدرا یک اتفاق خیلی مهم در زندگی من بود\nمن از دوره های قبلی که رفته بودم مهارت رو داشتم ولی نمیدونستم که چجوری باید وارد بازار کاری بشم \nکه موسسه صدرا بستر ورود به بازار کار رو برای من مهیا کرد.\n', '/assets/aiPics/manProf11.jpeg', 2),
('علی اشرفی', 'برنامه نویس فرانت', 'صدرا برای من خیلی بیشتر از یه مکان یا اتفاق بوده \nجدا از کمک هایی که به من کرده و رشدم داده \nصدرا برای من یک خانواده بوده و هست \nو واقعا شاکرم از تقدیر که این شرایط رو برام رقم زد.\n', '/assets/aiPics/manProf9.jpeg', 3),
('پانته آ کی پور', 'برنامه نویس FullStack', 'فقط در یک جمله بگم موسسه صدرا من رو از صفر آموزش داد و بعد پرورش داد و بعدش به عنوان نیروی کار استفاده کرد.', '/assets/aiPics/womanProf3.jpeg', 4),
('هانیه میرسلیمی', 'طراح و برنامه نویس وب', 'من اوایلش حسی خوبی به موسسه صدرا نداشتم، ولی رفته رفته که با محیط و پرسنل و نحوه کار کار کردن در این موسسه رو فهمیدم،\r\nفهمیدم که یه ادم چقد میتونه در جای درست و مکان درست باشه!', '/assets/aiPics/womanProf4.jpeg', 5);

-- --------------------------------------------------------

--
-- Table structure for table `contact-us`
--

CREATE TABLE `contact-us` (
  `id` int(11) NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `phoneNumber` text NOT NULL,
  `description` text NOT NULL,
  `date` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `contact-us`
--

INSERT INTO `contact-us` (`id`, `firstName`, `lastName`, `phoneNumber`, `description`, `date`) VALUES
(1, 'saeed', 'fazeabadi', '02133739091', 'wvdv', '1402-12-18'),
(2, 'saeed', 'fazeabadi', '02133739091', 'ftyuh', '1402-12-20'),
(3, '3rgw', 'wergwg', 'wgeweg', 'qwegegwqqqqqqqqq', '1402-12-20'),
(4, 'امیررضا ', 'عبدالرحیمی ', '09102711050', 'متن تست برای بک اند', '1402-12-20');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `category` mediumtext NOT NULL,
  `title` mediumtext NOT NULL,
  `teacherFirstName` mediumtext NOT NULL,
  `teacherLastName` mediumtext NOT NULL,
  `image` mediumtext NOT NULL,
  `price` mediumtext NOT NULL,
  `discount` mediumtext NOT NULL,
  `title_description1` mediumtext NOT NULL,
  `description1` mediumtext NOT NULL,
  `title_description2` mediumtext NOT NULL,
  `description2` mediumtext NOT NULL,
  `title_description3` mediumtext NOT NULL,
  `description3` mediumtext NOT NULL,
  `title_description4` mediumtext NOT NULL,
  `description4` mediumtext NOT NULL,
  `videoSrc` mediumtext NOT NULL,
  `thumbnail` mediumtext NOT NULL,
  `place` mediumtext NOT NULL,
  `date` mediumtext NOT NULL,
  `time` mediumtext NOT NULL COMMENT 'year/month/day/hour/minute/second',
  `detailSubtitle` mediumtext NOT NULL,
  `Detail_Head_Title` mediumtext NOT NULL,
  `isShown` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `category`, `title`, `teacherFirstName`, `teacherLastName`, `image`, `price`, `discount`, `title_description1`, `description1`, `title_description2`, `description2`, `title_description3`, `description3`, `title_description4`, `description4`, `videoSrc`, `thumbnail`, `place`, `date`, `time`, `detailSubtitle`, `Detail_Head_Title`, `isShown`) VALUES
(22, 'رویداد', 'حضور صدرا در نمایشگاه کار دانشگاه شهید بهشتی', '', '', '/assets/beheshti-roidad.jpg', '', '', '', '', '', '', '', '', '', '', '', '', 'دانشگاه شهید بهشتی', '14 12 1402', '10 00 00', 'نمایشگاه کار، رویدادی است که در آن با حذف واسطه ها، ایجاد فصای رقابتی، تنوع جایگاه های شغلی، سهولت وتسریع در استخدام افراد را فراهم می آورد. موسسه صدرا در راستای رسالت و اهداف، اقدام به حصور در رویداد هایی را در دستور کار خود قرار داده است؛ از این رو با حضور در نمایشگاه کار دانشگاه شهید بهشتی سعی در تحقق این امر نموده است. لذا دانش آموزان، دانشجویان، مدرسین، سازمان، موسسات و شرکت هایی که مایل به همکاری با موسسه صدرا هستند می تواند به غرفه ی ما در این نمایشگاه مراجعه نمایند.', 'نمایشگاه کار', 1),
(21, 'رویداد', 'رویداد صدرا در دانشگاه علوم و تحقیقات با محوریت علوم شناختی، هوش مصنوعی و رسانه', 'رحیم فرجی', 'و عطااله ابطحی', '/assets/azad-roidad.jpg', '', '', '', '', '', '', '', '', '', '', '', '', 'دانشگاه آزاد تهران - واحد علوم و تحقیقات', '26 4 2024', '9 00 00', 'در قرنی به سر می بریم که به عصر ارتباطات،رسانه،فناوری و... شناخته شده است. تغیرر و تحولات بسیار زیادی در دهه های اخیر در حوزه فناوری اطلاعات و رسانه ایجاد شده و شاید می توان گفت که هوش مصنوعی نقطه عطفی در میان این تغییرات می باشد. آگاهی جامعه از پیشرفت های این حوزه میتواند به عملکرد و تصمیمات درست بیانجمد. در این راستا موسسه صدرا اقدام به برگزاری رویدادی به عنوان <<علوم شناختی، هوش مصنوعی و رسانه>> نموده است تا بتواند در این حوزه علمی کشور، تاثیر گذار باشد.', 'هوش مصنوعی و علوم شناختی', 1);

-- --------------------------------------------------------

--
-- Table structure for table `jobteam`
--

CREATE TABLE `jobteam` (
  `id` int(11) NOT NULL,
  `name` mediumtext NOT NULL,
  `job` mediumtext NOT NULL,
  `account` mediumtext NOT NULL,
  `accountLink` mediumtext NOT NULL,
  `titlePicture` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `jobteam`
--

INSERT INTO `jobteam` (`id`, `name`, `job`, `account`, `accountLink`, `titlePicture`) VALUES
(1, 'دکتر رحیم فرجی', 'سرپرست ارشد جذب و استخدام', 'حساب کاربری لینکدین', '', '/assets/jobTeam/rahim-faraji.JPG'),
(2, 'مهندس طاهر آقاپور', 'کارشناس پایه جذب و استخدام', 'حساب کاربری لینکدین', '', '/assets/jobTeam/taher-aghapour.jpg'),
(3, 'مهندس محمد دماوندی نیا', 'کارشناس پایه جذب و استخدام', 'حساب کاربری لینکدین', '', '/assets/jobTeam/mohammad-damavandinia.png'),
(4, 'آقای شهاب راحله', 'کارشناس پایه جذب و استخدام', 'حساب کاربری لینکدین', '', '/assets/jobTeam/shahab-rahele.JPG');

-- --------------------------------------------------------

--
-- Table structure for table `popular-events`
--

CREATE TABLE `popular-events` (
  `id` int(11) NOT NULL,
  `title` mediumtext NOT NULL,
  `teacher` mediumtext NOT NULL,
  `price` mediumtext NOT NULL,
  `discount` mediumtext NOT NULL,
  `level` mediumtext NOT NULL,
  `time` mediumtext NOT NULL,
  `lessons` mediumtext NOT NULL,
  `rate` mediumtext NOT NULL,
  `category` mediumtext NOT NULL,
  `thumbnail` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `popular-events`
--

INSERT INTO `popular-events` (`id`, `title`, `teacher`, `price`, `discount`, `level`, `time`, `lessons`, `rate`, `category`, `thumbnail`) VALUES
(1, 'نحوه طراحی دستی ایده‌ها', 'علی بابایی', '128', '0', 'مبتدی', '40', '21', '4.8', 'طراحی UI/UX', '/assets/homePopEvent/popImage.png'),
(2, 'طراحی UI/UX', 'علی بابایی', '230', '100', 'متوسط', '60', '20', '5', 'طراحی UI/UX', '/assets/homePopEvent/popImage2.png'),
(3, 'طراحی UI/UX', 'علی بابایی', '230', '10', 'دشوار', '60', '20', '3.5', 'طراحی UI/UX', '/assets/homePopEvent/popImage3.png'),
(4, 'fullStack', 'amiriar', '300', '0', 'بسیار دشوار', '120', '85', '5', 'فرانت‌اند', '/assets/homePopEvent/popImage2.png'),
(5, 'fullStack', 'amiriar', '300', '99', 'بسیار دشوار', '120', '85', '5', 'فرانت‌اند', '/assets/homePopEvent/popImage.png');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `title` mediumtext NOT NULL,
  `question` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `title`, `question`) VALUES
(1, 'فرصت‌های شغلی صدرا را از کجا ببینم؟ چطور اقدام کنم؟', 'می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید.'),
(2, 'فرایند جذب در صدرا چگونه است؟', 'می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید.'),
(3, 'کار در صدرا چه مزایایی دارد؟', 'می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید.'),
(4, 'چطور می‌توانم محیط کار و فرهنگ صدرا را بیشتر بشناسم؟', 'می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید.');

-- --------------------------------------------------------

--
-- Table structure for table `resume`
--

CREATE TABLE `resume` (
  `id` int(11) NOT NULL,
  `firstName` mediumtext NOT NULL,
  `lastName` mediumtext NOT NULL,
  `phoneNumber` mediumtext NOT NULL,
  `selectedTitle` mediumtext NOT NULL,
  `selectedTime` mediumtext NOT NULL,
  `selectedPlace` mediumtext NOT NULL,
  `filePath` mediumtext NOT NULL,
  `fileName` mediumtext NOT NULL,
  `date` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `resume`
--

INSERT INTO `resume` (`id`, `firstName`, `lastName`, `phoneNumber`, `selectedTitle`, `selectedTime`, `selectedPlace`, `filePath`, `fileName`, `date`) VALUES
(5, 'Rwin', 'Zakeri', '09032204382', 'Senior backend developer ', 'تمام وقت', 'تهران', '../public_html/assets/uploads/5c59b019-e1c1-439a-a8fc-4dce9dd98e8c.jpg', 'Screenshot_20240307_153138_YouTube.jpg', '1402-12-18'),
(4, 'saeed', 'fazeabadi', '02133739091', 'Senior backend developer ', 'تمام وقت', 'تهران', '../public_html/assets/uploads/ff675f16-afca-4977-9747-b67b4657d553.pdf', 'JS APIs.pdf', '1402-12-16');

-- --------------------------------------------------------

--
-- Table structure for table `student-success`
--

CREATE TABLE `student-success` (
  `id` int(11) NOT NULL,
  `videoSrc` mediumtext NOT NULL,
  `videoTitle` mediumtext NOT NULL,
  `videoJob` mediumtext NOT NULL,
  `videoThumbnail` mediumtext NOT NULL,
  `authorPicture` mediumtext NOT NULL,
  `authorName` mediumtext NOT NULL,
  `authorJob` mediumtext NOT NULL,
  `description` mediumtext NOT NULL,
  `additionalPicture` mediumtext NOT NULL,
  `date` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `student-success`
--

INSERT INTO `student-success` (`id`, `videoSrc`, `videoTitle`, `videoJob`, `videoThumbnail`, `authorPicture`, `authorName`, `authorJob`, `description`, `additionalPicture`, `date`) VALUES
(31, '', '', '', '', '../public_html/assets/uploads/7bea93d3-d4db-45c6-98c0-6bad59171b96.jpeg', 'مهسا محمدی', 'برنامه نویس فرانت اند', 'من دوره وب پک 1 رو رفتم و به نظرم نقطه قوت این دوره کامل بودنش بود', '', '1402-12-13'),
(32, '', '', '', '', '../public_html/assets/uploads/93612f6b-e4eb-4657-89cc-47eab5a8e6c1.jpeg', 'پانته آ کی پور', 'برنامه نویس FullStack', 'فقط در یک جمله بگم موسسه صدرا من رو از صفر آموزش داد و بعد پرورش داد و بعدش به عنوان نیروی کار استفاده کرد.', '', '1402-12-13'),
(33, '', '', '', '', '../public_html/assets/uploads/8d336bc9-2ee4-4651-8fdc-55474527ebd9.jpeg', 'علی اشرفی', 'برنامه نویس فرانت', 'صدرا برای من خیلی بیشتر از یه مکان یا اتفاق بوده \nجدا از کمک هایی که به من کرده و رشدم داده \nصدرا برای من یک خانواده بوده و هست \nو واقعا شاکرم از تقدیر که این شرایط رو برام رقم زد.\n', '', '1402-12-13'),
(29, '', '', '', '', '../public_html/assets/uploads/3b207f9c-f030-4bba-a473-e9bca1c9c50d.jpeg', 'محمد خرسندی', 'برنامه نویس وب', 'طول دوره مرتب بود و مطالب نظم خوبی داشت.', '', '1402-12-13'),
(30, '', '', '', '', '../public_html/assets/uploads/b49676fe-9fc6-431d-a0f6-2f65b61c9e61.jpeg', 'علی کاظمی‌راد', 'پروداکت دیزاین', 'من دوره نتورک پلاس شرکت کردم و به خاطر مدرس خوب من خیلی راحت با مطالب ارتباط برقرار کردم', '', '1402-12-13');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` mediumtext NOT NULL,
  `courese` mediumtext NOT NULL,
  `beforeJob` mediumtext NOT NULL,
  `afterJob` mediumtext NOT NULL,
  `titleDescription` mediumtext NOT NULL,
  `about` mediumtext NOT NULL,
  `whatMadeYouChooseSadra` mediumtext NOT NULL,
  `whatBeforeSadra` mediumtext NOT NULL,
  `opinionOnSadra` mediumtext NOT NULL,
  `videoOnOpinion` mediumtext NOT NULL,
  `videoOnOpinionPoster` mediumtext NOT NULL,
  `titlePicture` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `courese`, `beforeJob`, `afterJob`, `titleDescription`, `about`, `whatMadeYouChooseSadra`, `whatBeforeSadra`, `opinionOnSadra`, `videoOnOpinion`, `videoOnOpinionPoster`, `titlePicture`) VALUES
(1, 'محمد علی نجفی', 'دوره طراحی رابط کاربری و تجربه کاربری', 'کارمند دفتر خدماتی', 'طراح رابط کاربری در شرکت یواکس دیزاینیون', '“برای من که رشته تحصیلیم غیر مرتبط بود و پیش زمینه‌ای رو نداشتم غیرقابل باور بود که بعد از یک دوره شش ماهه سریعا وارد بازار کار بشم و مشغول به کار در رشته مورد علاقم بشم واقعا از این اتفاق و انتخاب صدرا برای یادگیری خوشحالم.”', 'وقتی اسکار هررا در مکزیک بزرگ می شد، والدین اسکار هررا یک بازی بازی داشتند. او مجذوب کنسول های بازی ویدیویی و نحوه کار آنها بود، اما در دبیرستان فقط به یک کلاس برنامه نویسی دسترسی داشت و نمی توانست در کالج شرکت کند.', 'بهترین محصولات بر اساس تحقیقات و بازخورد کاربران دورهای تکرار را پشت سر گذاشته اند. فرآیند یک سرعت طراحی را بیاموزید و چگونه یافته‌های تحقیق را به یک نمونه اولیه که می‌تواند با کاربران آزمایش شود، ترجمه کنید. درک چگونگی تقویت همکاری تیمی و استفاده از تفکر واگرا و همگرا برای ایجاد سریع نمونه های آزمایشی. اصول رابط کاربری را در طراحی یک نمونه اولیه قابل کلیک اعمال کنید و یک تست قابلیت استفاده را برای به دست آوردن بازخورد ارزشمند از کاربران که می تواند در تکرارهای طراحی استفاده شود، انجام دهید.', 'هنگامی که محصولات از نظر اثربخشی آزمایش شدند، باید برای تعامل تقویت شوند. اصول رابط کاربری پیشرفته را بیاموزید تا طرح های تعاملی بسازید که آماده تحویل به مهندسی برای بازخورد هستند. درک چگونگی درخواست و ادغام بازخورد از مهندسی برای بهبود طراحی قبل از آماده شدن برای توسعه. تعامل محصول را از طریق آزمایش قابلیت استفاده از راه دور و سایر روش‌های آزمایشی ارزیابی کنید. در نهایت، نحوه بهبود طراحی و تجربیات کاربر بر اساس داده‌های تعامل به منظور افزایش شاخص‌های کلیدی عملکرد را خواهید آموخت.', 'طراحان UX مهارت های خود را با نمایش طرح ها و فرآیندهای خود در یک نمونه کار نشان می دهند. درک آنچه باید و نباید در یک نمونه کارها گنجانده شود، و همچنین اجزای کلیدی که برای مخاطبان هدف جذاب هستند. یاد بگیرید که چگونه کار قبلی را سازماندهی کنید و با آن به صورت آنلاین ارتباط برقرار کنید و مخاطبان و اهداف شغلی خود را در نظر داشته باشید. چارچوب های داستان سرایی و برندسازی را برای ایجاد یک نمایه شخصی که ارزش پیشنهادی منحصر به فردی را منتقل می کند، اعمال کنید. همچنین بهترین روش‌ها را برای حفظ و به‌روزرسانی پورتفولیوی UX یاد خواهید گرفت.', '../../assets/Media.mp4', '../../assets/Student-detail/studentVideoPoster.jpeg', '../../assets/Student-detail/stuDetailPic.png'),
(2, 'حسین اشرفی پور', 'دوره طراحی رابط کاربری و تجربه کاربری', 'کارمند دفتر خدماتی', 'طراح رابط کاربری در شرکت یواکس دیزاینیون', '“برای من که رشته تحصیلیم غیر مرتبط بود و پیش زمینه‌ای رو نداشتم غیرقابل باور بود که بعد از یک دوره شش ماهه سریعا وارد بازار کار بشم و مشغول به کار در رشته مورد علاقم بشم واقعا از این اتفاق و انتخاب صدرا برای یادگیری خوشحالم.”', 'وقتی اسکار هررا در مکزیک بزرگ می شد، والدین اسکار هررا یک بازی بازی داشتند. او مجذوب کنسول های بازی ویدیویی و نحوه کار آنها بود، اما در دبیرستان فقط به یک کلاس برنامه نویسی دسترسی داشت و نمی توانست در کالج شرکت کند.', 'بهترین محصولات بر اساس تحقیقات و بازخورد کاربران دورهای تکرار را پشت سر گذاشته اند. فرآیند یک سرعت طراحی را بیاموزید و چگونه یافته‌های تحقیق را به یک نمونه اولیه که می‌تواند با کاربران آزمایش شود، ترجمه کنید. درک چگونگی تقویت همکاری تیمی و استفاده از تفکر واگرا و همگرا برای ایجاد سریع نمونه های آزمایشی. اصول رابط کاربری را در طراحی یک نمونه اولیه قابل کلیک اعمال کنید و یک تست قابلیت استفاده را برای به دست آوردن بازخورد ارزشمند از کاربران که می تواند در تکرارهای طراحی استفاده شود، انجام دهید.', 'هنگامی که محصولات از نظر اثربخشی آزمایش شدند، باید برای تعامل تقویت شوند. اصول رابط کاربری پیشرفته را بیاموزید تا طرح های تعاملی بسازید که آماده تحویل به مهندسی برای بازخورد هستند. درک چگونگی درخواست و ادغام بازخورد از مهندسی برای بهبود طراحی قبل از آماده شدن برای توسعه. تعامل محصول را از طریق آزمایش قابلیت استفاده از راه دور و سایر روش‌های آزمایشی ارزیابی کنید. در نهایت، نحوه بهبود طراحی و تجربیات کاربر بر اساس داده‌های تعامل به منظور افزایش شاخص‌های کلیدی عملکرد را خواهید آموخت.', 'طراحان UX مهارت های خود را با نمایش طرح ها و فرآیندهای خود در یک نمونه کار نشان می دهند. درک آنچه باید و نباید در یک نمونه کارها گنجانده شود، و همچنین اجزای کلیدی که برای مخاطبان هدف جذاب هستند. یاد بگیرید که چگونه کار قبلی را سازماندهی کنید و با آن به صورت آنلاین ارتباط برقرار کنید و مخاطبان و اهداف شغلی خود را در نظر داشته باشید. چارچوب های داستان سرایی و برندسازی را برای ایجاد یک نمایه شخصی که ارزش پیشنهادی منحصر به فردی را منتقل می کند، اعمال کنید. همچنین بهترین روش‌ها را برای حفظ و به‌روزرسانی پورتفولیوی UX یاد خواهید گرفت.', '../../assets/Media.mp4', '../../assets/Student-detail/studentVideoPoster.jpeg', '../../assets/Student-detail/stuDetailPic.png'),
(3, 'شراره میهن دوست', 'دوره طراحی رابط کاربری و تجربه کاربری', 'کارمند دفتر خدماتی', 'طراح رابط کاربری در شرکت یواکس دیزاینیون', '“برای من که رشته تحصیلیم غیر مرتبط بود و پیش زمینه‌ای رو نداشتم غیرقابل باور بود که بعد از یک دوره شش ماهه سریعا وارد بازار کار بشم و مشغول به کار در رشته مورد علاقم بشم واقعا از این اتفاق و انتخاب صدرا برای یادگیری خوشحالم.”', 'وقتی اسکار هررا در مکزیک بزرگ می شد، والدین اسکار هررا یک بازی بازی داشتند. او مجذوب کنسول های بازی ویدیویی و نحوه کار آنها بود، اما در دبیرستان فقط به یک کلاس برنامه نویسی دسترسی داشت و نمی توانست در کالج شرکت کند.', 'بهترین محصولات بر اساس تحقیقات و بازخورد کاربران دورهای تکرار را پشت سر گذاشته اند. فرآیند یک سرعت طراحی را بیاموزید و چگونه یافته‌های تحقیق را به یک نمونه اولیه که می‌تواند با کاربران آزمایش شود، ترجمه کنید. درک چگونگی تقویت همکاری تیمی و استفاده از تفکر واگرا و همگرا برای ایجاد سریع نمونه های آزمایشی. اصول رابط کاربری را در طراحی یک نمونه اولیه قابل کلیک اعمال کنید و یک تست قابلیت استفاده را برای به دست آوردن بازخورد ارزشمند از کاربران که می تواند در تکرارهای طراحی استفاده شود، انجام دهید.', 'هنگامی که محصولات از نظر اثربخشی آزمایش شدند، باید برای تعامل تقویت شوند. اصول رابط کاربری پیشرفته را بیاموزید تا طرح های تعاملی بسازید که آماده تحویل به مهندسی برای بازخورد هستند. درک چگونگی درخواست و ادغام بازخورد از مهندسی برای بهبود طراحی قبل از آماده شدن برای توسعه. تعامل محصول را از طریق آزمایش قابلیت استفاده از راه دور و سایر روش‌های آزمایشی ارزیابی کنید. در نهایت، نحوه بهبود طراحی و تجربیات کاربر بر اساس داده‌های تعامل به منظور افزایش شاخص‌های کلیدی عملکرد را خواهید آموخت.', 'طراحان UX مهارت های خود را با نمایش طرح ها و فرآیندهای خود در یک نمونه کار نشان می دهند. درک آنچه باید و نباید در یک نمونه کارها گنجانده شود، و همچنین اجزای کلیدی که برای مخاطبان هدف جذاب هستند. یاد بگیرید که چگونه کار قبلی را سازماندهی کنید و با آن به صورت آنلاین ارتباط برقرار کنید و مخاطبان و اهداف شغلی خود را در نظر داشته باشید. چارچوب های داستان سرایی و برندسازی را برای ایجاد یک نمایه شخصی که ارزش پیشنهادی منحصر به فردی را منتقل می کند، اعمال کنید. همچنین بهترین روش‌ها را برای حفظ و به‌روزرسانی پورتفولیوی UX یاد خواهید گرفت.', '../../assets/Media.mp4', '../../assets/Student-detail/studentVideoPoster.jpeg', '../../assets/Student-detail/stuDetailPic.png'),
(4, 'میهن عباسی', 'دوره طراحی رابط کاربری و تجربه کاربری', 'کارمند دفتر خدماتی', 'طراح رابط کاربری در شرکت یواکس دیزاینیون', '“برای من که رشته تحصیلیم غیر مرتبط بود و پیش زمینه‌ای رو نداشتم غیرقابل باور بود که بعد از یک دوره شش ماهه سریعا وارد بازار کار بشم و مشغول به کار در رشته مورد علاقم بشم واقعا از این اتفاق و انتخاب صدرا برای یادگیری خوشحالم.”', 'وقتی اسکار هررا در مکزیک بزرگ می شد، والدین اسکار هررا یک بازی بازی داشتند. او مجذوب کنسول های بازی ویدیویی و نحوه کار آنها بود، اما در دبیرستان فقط به یک کلاس برنامه نویسی دسترسی داشت و نمی توانست در کالج شرکت کند.', 'بهترین محصولات بر اساس تحقیقات و بازخورد کاربران دورهای تکرار را پشت سر گذاشته اند. فرآیند یک سرعت طراحی را بیاموزید و چگونه یافته‌های تحقیق را به یک نمونه اولیه که می‌تواند با کاربران آزمایش شود، ترجمه کنید. درک چگونگی تقویت همکاری تیمی و استفاده از تفکر واگرا و همگرا برای ایجاد سریع نمونه های آزمایشی. اصول رابط کاربری را در طراحی یک نمونه اولیه قابل کلیک اعمال کنید و یک تست قابلیت استفاده را برای به دست آوردن بازخورد ارزشمند از کاربران که می تواند در تکرارهای طراحی استفاده شود، انجام دهید.', 'هنگامی که محصولات از نظر اثربخشی آزمایش شدند، باید برای تعامل تقویت شوند. اصول رابط کاربری پیشرفته را بیاموزید تا طرح های تعاملی بسازید که آماده تحویل به مهندسی برای بازخورد هستند. درک چگونگی درخواست و ادغام بازخورد از مهندسی برای بهبود طراحی قبل از آماده شدن برای توسعه. تعامل محصول را از طریق آزمایش قابلیت استفاده از راه دور و سایر روش‌های آزمایشی ارزیابی کنید. در نهایت، نحوه بهبود طراحی و تجربیات کاربر بر اساس داده‌های تعامل به منظور افزایش شاخص‌های کلیدی عملکرد را خواهید آموخت.', 'طراحان UX مهارت های خود را با نمایش طرح ها و فرآیندهای خود در یک نمونه کار نشان می دهند. درک آنچه باید و نباید در یک نمونه کارها گنجانده شود، و همچنین اجزای کلیدی که برای مخاطبان هدف جذاب هستند. یاد بگیرید که چگونه کار قبلی را سازماندهی کنید و با آن به صورت آنلاین ارتباط برقرار کنید و مخاطبان و اهداف شغلی خود را در نظر داشته باشید. چارچوب های داستان سرایی و برندسازی را برای ایجاد یک نمایه شخصی که ارزش پیشنهادی منحصر به فردی را منتقل می کند، اعمال کنید. همچنین بهترین روش‌ها را برای حفظ و به‌روزرسانی پورتفولیوی UX یاد خواهید گرفت.', '../../assets/Media.mp4', '../../assets/Student-detail/studentVideoPoster.jpeg', '../../assets/Student-detail/stuDetailPic.png'),
(5, 'الناز شاکردوست', 'دوره طراحی رابط کاربری و تجربه کاربری', 'کارمند دفتر خدماتی', 'طراح رابط کاربری در شرکت یواکس دیزاینیون', '“برای من که رشته تحصیلیم غیر مرتبط بود و پیش زمینه‌ای رو نداشتم غیرقابل باور بود که بعد از یک دوره شش ماهه سریعا وارد بازار کار بشم و مشغول به کار در رشته مورد علاقم بشم واقعا از این اتفاق و انتخاب صدرا برای یادگیری خوشحالم.”', 'وقتی اسکار هررا در مکزیک بزرگ می شد، والدین اسکار هررا یک بازی بازی داشتند. او مجذوب کنسول های بازی ویدیویی و نحوه کار آنها بود، اما در دبیرستان فقط به یک کلاس برنامه نویسی دسترسی داشت و نمی توانست در کالج شرکت کند.', 'بهترین محصولات بر اساس تحقیقات و بازخورد کاربران دورهای تکرار را پشت سر گذاشته اند. فرآیند یک سرعت طراحی را بیاموزید و چگونه یافته‌های تحقیق را به یک نمونه اولیه که می‌تواند با کاربران آزمایش شود، ترجمه کنید. درک چگونگی تقویت همکاری تیمی و استفاده از تفکر واگرا و همگرا برای ایجاد سریع نمونه های آزمایشی. اصول رابط کاربری را در طراحی یک نمونه اولیه قابل کلیک اعمال کنید و یک تست قابلیت استفاده را برای به دست آوردن بازخورد ارزشمند از کاربران که می تواند در تکرارهای طراحی استفاده شود، انجام دهید.', 'هنگامی که محصولات از نظر اثربخشی آزمایش شدند، باید برای تعامل تقویت شوند. اصول رابط کاربری پیشرفته را بیاموزید تا طرح های تعاملی بسازید که آماده تحویل به مهندسی برای بازخورد هستند. درک چگونگی درخواست و ادغام بازخورد از مهندسی برای بهبود طراحی قبل از آماده شدن برای توسعه. تعامل محصول را از طریق آزمایش قابلیت استفاده از راه دور و سایر روش‌های آزمایشی ارزیابی کنید. در نهایت، نحوه بهبود طراحی و تجربیات کاربر بر اساس داده‌های تعامل به منظور افزایش شاخص‌های کلیدی عملکرد را خواهید آموخت.', 'طراحان UX مهارت های خود را با نمایش طرح ها و فرآیندهای خود در یک نمونه کار نشان می دهند. درک آنچه باید و نباید در یک نمونه کارها گنجانده شود، و همچنین اجزای کلیدی که برای مخاطبان هدف جذاب هستند. یاد بگیرید که چگونه کار قبلی را سازماندهی کنید و با آن به صورت آنلاین ارتباط برقرار کنید و مخاطبان و اهداف شغلی خود را در نظر داشته باشید. چارچوب های داستان سرایی و برندسازی را برای ایجاد یک نمایه شخصی که ارزش پیشنهادی منحصر به فردی را منتقل می کند، اعمال کنید. همچنین بهترین روش‌ها را برای حفظ و به‌روزرسانی پورتفولیوی UX یاد خواهید گرفت.', '../../assets/Media.mp4', '../../assets/Student-detail/studentVideoPoster.jpeg', '../../assets/Student-detail/stuDetailPic.png'),
(6, 'پوریا شهسواری', 'دوره طراحی رابط کاربری و تجربه کاربری', 'کارمند دفتر خدماتی', 'طراح رابط کاربری در شرکت یواکس دیزاینیون', '“برای من که رشته تحصیلیم غیر مرتبط بود و پیش زمینه‌ای رو نداشتم غیرقابل باور بود که بعد از یک دوره شش ماهه سریعا وارد بازار کار بشم و مشغول به کار در رشته مورد علاقم بشم واقعا از این اتفاق و انتخاب صدرا برای یادگیری خوشحالم.”', 'وقتی اسکار هررا در مکزیک بزرگ می شد، والدین اسکار هررا یک بازی بازی داشتند. او مجذوب کنسول های بازی ویدیویی و نحوه کار آنها بود، اما در دبیرستان فقط به یک کلاس برنامه نویسی دسترسی داشت و نمی توانست در کالج شرکت کند.', 'بهترین محصولات بر اساس تحقیقات و بازخورد کاربران دورهای تکرار را پشت سر گذاشته اند. فرآیند یک سرعت طراحی را بیاموزید و چگونه یافته‌های تحقیق را به یک نمونه اولیه که می‌تواند با کاربران آزمایش شود، ترجمه کنید. درک چگونگی تقویت همکاری تیمی و استفاده از تفکر واگرا و همگرا برای ایجاد سریع نمونه های آزمایشی. اصول رابط کاربری را در طراحی یک نمونه اولیه قابل کلیک اعمال کنید و یک تست قابلیت استفاده را برای به دست آوردن بازخورد ارزشمند از کاربران که می تواند در تکرارهای طراحی استفاده شود، انجام دهید.', 'هنگامی که محصولات از نظر اثربخشی آزمایش شدند، باید برای تعامل تقویت شوند. اصول رابط کاربری پیشرفته را بیاموزید تا طرح های تعاملی بسازید که آماده تحویل به مهندسی برای بازخورد هستند. درک چگونگی درخواست و ادغام بازخورد از مهندسی برای بهبود طراحی قبل از آماده شدن برای توسعه. تعامل محصول را از طریق آزمایش قابلیت استفاده از راه دور و سایر روش‌های آزمایشی ارزیابی کنید. در نهایت، نحوه بهبود طراحی و تجربیات کاربر بر اساس داده‌های تعامل به منظور افزایش شاخص‌های کلیدی عملکرد را خواهید آموخت.', 'طراحان UX مهارت های خود را با نمایش طرح ها و فرآیندهای خود در یک نمونه کار نشان می دهند. درک آنچه باید و نباید در یک نمونه کارها گنجانده شود، و همچنین اجزای کلیدی که برای مخاطبان هدف جذاب هستند. یاد بگیرید که چگونه کار قبلی را سازماندهی کنید و با آن به صورت آنلاین ارتباط برقرار کنید و مخاطبان و اهداف شغلی خود را در نظر داشته باشید. چارچوب های داستان سرایی و برندسازی را برای ایجاد یک نمایه شخصی که ارزش پیشنهادی منحصر به فردی را منتقل می کند، اعمال کنید. همچنین بهترین روش‌ها را برای حفظ و به‌روزرسانی پورتفولیوی UX یاد خواهید گرفت.', '../../assets/Media.mp4', '../../assets/Student-detail/studentVideoPoster.jpeg', '../../assets/Student-detail/stuDetailPic.png');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `name` mediumtext NOT NULL,
  `job` mediumtext NOT NULL,
  `profile` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `job`, `profile`) VALUES
(1, 'احسان جلیل زاده', 'مدیر محصول - بلوبانک', '/assets/teachersImage/teachprof1.jpg'),
(2, 'زهرا فراهانی', 'طراح محصول - تپسی', '/assets/teachersImage/teachprof2.jpg'),
(3, 'احسان جلیل زاده', 'مدیر محصول - بلوبانک', '/assets/teachersImage/teachprof3.jpg'),
(4, 'زهرا فراهانی', 'طراح محصول - تپسی', '/assets/teachersImage/teachprof2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` mediumtext NOT NULL,
  `lastName` mediumtext NOT NULL,
  `userName` mediumtext NOT NULL,
  `role` mediumtext DEFAULT NULL,
  `lastDateIn` mediumtext NOT NULL,
  `email` mediumtext NOT NULL,
  `password` mediumtext NOT NULL,
  `age` int(11) NOT NULL,
  `phoneNumber` mediumtext NOT NULL,
  `education` mediumtext NOT NULL,
  `isStudent` tinyint(1) NOT NULL,
  `profile` mediumtext NOT NULL,
  `description` mediumtext NOT NULL,
  `linkedin` mediumtext NOT NULL,
  `pinterest` mediumtext NOT NULL,
  `twitterX` mediumtext NOT NULL,
  `facebook` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `userName`, `role`, `lastDateIn`, `email`, `password`, `age`, `phoneNumber`, `education`, `isStudent`, `profile`, `description`, `linkedin`, `pinterest`, `twitterX`, `facebook`) VALUES
(11, 'حسین', 'اشرفی پور', 'teacher2', 'teacher', '1402-12-20', 'teacher@test.com', '$2a$10$9axKRCXk3Q9uYglUU7kl3./qaKaP4GZgg86uarWzmIUFaJgcCBunW', 43, '02133734091', 'دیپلم', 0, '../public_html/assets/uploads/58bc5ec6-00c3-4f5a-9d7c-8dc29066814c.png', 'متن تست نو', '#', '#', '#', '#'),
(12, '', '', 'admin', 'admin', '1402-12-26', 'admin@test.com', '$2a$10$VQnEQ.l4Glj82yRT2ci0LeqRHhtlfBzTSRPaQQra8Id8vIRop6o3C', 0, '', '', 0, '../public_html/assets/uploads/69c7cd8a-3554-4635-8f1b-583b69763ab4.png', '', '', '', '', ''),
(26, '', '', 'rahelehshahab@gmail.com', 'user', '1402-11-30', 'rahelehshahab@gmail.com', '$2a$10$kQvqRK6UH5VpOeXPrJf6Cedr3o5Fnenl3sWgO/ELxLcMm4G4RX0Va', 0, '', '', 0, '', '', '#', '#', '#', '#'),
(37, 'Taher', 'Aghapour', 'Taher', 'user', '1402-12-14', 'taghapour1372130@gmail.com', '$2a$10$a.wimyL7/47kC686tXbFh.xIBjhl38tLGEUplpVwcPM.GeDkK/J.O', 30, '09120934160', 'لیسانس', 0, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(17, 'شهاب', 'راحله', 'raheleShahab', 'user', '1402-11-18', 'rahelehshahab@gmail.com', '$2a$10$3DNaFdGBJ4z3ZEleK8g7Leg/hT1nz0m7N/pERqP8La83TWFuNPUsa', 45, '09122376079', 'لیسانس', 0, '', '', '#', '#', '#', '#'),
(35, '', '', 'admin', 'user', '1402-12-13', 'amiriar.irr2@gmail.com', '$2a$10$1a/GKG0DTeziCLZ9fMberO1vPOZMK9N3Uxc2BkJA8HYMqxAZKuZh.', 0, '', '', 0, '', '', '#', '#', '#', '#'),
(32, '', '', 'erik', 'user', '1402-12-05', 'erikheydari@gmail.com', '$2a$10$9TZOjhByCaqb.ojCRGWB7OtARY.Ih9Wrn3Ju6atQRgGBZwlX2InHy', 0, '', '', 0, '', '', '#', '#', '#', '#'),
(27, '', '', 'taher', 'user', '1402-11-30', 'taher', '$2a$10$BEikTSZBUf0J/j0MHwCmaO0LQZy1xIg7CbC6KGC7a3AYsYTI0gyGa', 0, '', '', 0, '', '', '#', '#', '#', '#'),
(28, '', '', 'root', 'user', '1402-11-30', 'aghapourtaher@gmail.com', '$2a$10$JYHiSVoI5P/Qesc7VBqmDuKg/Dl42ANQSE7wjfl4.jQSVWgedquXG', 0, '', '', 0, '', '', '#', '#', '#', '#'),
(29, '', '', 'behrad', 'user', '1402-11-30', 'behradjafari@protonmail.com', '$2a$10$cPOHv3ealPY/br.EGQkf0.3VGyFjQtoOLX0VAN/tIPcP.NM52DBbu', 0, '', '', 0, '', '', '#', '#', '#', '#'),
(30, 'علی', 'امینی', 'ali.aminiy', 'user', '1402-12-01', 'aliaminialavijeh@gmail.com', '$2a$10$AD7vO7fDJlPVVhx1DBJk6OhBoDA4oCr1LmCL1ecH5cNzqjL.sTxaO', 25, '09194166199', 'لیسانس', 0, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(31, '', '', 'ali.aminiy', 'user', '1402-12-01', 'aliaminialavijeh@gmail.com', '$2a$10$VMzVCVO9ms.Kt0TrZL8/SuaddY9LZhVHxZVVLrOBu082w5nUCbvAy', 0, '', '', 0, '', '', '#', '#', '#', '#');

-- --------------------------------------------------------

--
-- Table structure for table `whyus`
--

CREATE TABLE `whyus` (
  `id` int(11) NOT NULL,
  `authorName` mediumtext NOT NULL,
  `authorJob` mediumtext NOT NULL,
  `videoSrc` mediumtext NOT NULL,
  `videoThumbnail` mediumtext NOT NULL,
  `videoTitle` mediumtext NOT NULL,
  `videoJob` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32 COLLATE=utf32_persian_ci;

--
-- Dumping data for table `whyus`
--

INSERT INTO `whyus` (`id`, `authorName`, `authorJob`, `videoSrc`, `videoThumbnail`, `videoTitle`, `videoJob`) VALUES
(1, 'پوریا شهسواری', 'Data Scientist, DPR Construction', '/assets/Media.mp4', '/assets/Student-Success/thumb1.jpeg', 'سهیل فرهادی', 'Software Engineer'),
(2, 'سهیل فرهادی', 'Software Engineer', '/assets/Media.mp4', '/assets/Student-Success/thumb2.jpeg', 'سهیل فرهادی', 'Software Engineer'),
(3, 'زهرا فراهانی', 'طراح رابط کاربری و تجربه کاربر', '/assets/Media.mp4', '/assets/Student-Success/thumb3.png', 'سهیل فرهادی', 'Software Engineer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `careeropportunities`
--
ALTER TABLE `careeropportunities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact-us`
--
ALTER TABLE `contact-us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobteam`
--
ALTER TABLE `jobteam`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `popular-events`
--
ALTER TABLE `popular-events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resume`
--
ALTER TABLE `resume`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student-success`
--
ALTER TABLE `student-success`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whyus`
--
ALTER TABLE `whyus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `careeropportunities`
--
ALTER TABLE `careeropportunities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contact-us`
--
ALTER TABLE `contact-us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `jobteam`
--
ALTER TABLE `jobteam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `popular-events`
--
ALTER TABLE `popular-events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `resume`
--
ALTER TABLE `resume`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `student-success`
--
ALTER TABLE `student-success`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `whyus`
--
ALTER TABLE `whyus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
