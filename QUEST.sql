-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 07:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quest`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `deptname` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `deptname`, `created_at`, `updated_at`, `name`) VALUES
(28, 'Electrical Technology', '2024-01-13 09:25:38', '2024-01-13 09:25:38', ''),
(29, 'Mechanical Technology', '2024-01-13 09:25:38', '2024-01-13 09:25:38', ''),
(30, 'Basics Sciences and Related Studies', '2024-01-13 09:25:38', '2024-01-13 09:25:38', ''),
(31, 'Civil Engineering', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(32, 'Mechanical Engineering', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(33, 'Building & Architectural', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(34, 'Industrial & Manufacturing', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(35, 'Electrical Engineering', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(36, 'Computer Systems Eng.', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(37, 'Electronic Engineering', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(38, 'Telecommunication Eng.', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(39, 'Software Engineering', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(40, 'Electrical (Automation and Control)', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(41, 'Biomedical', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(42, 'Information Technology', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(43, 'Computer Science', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(44, 'Artificial Intelligence', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(45, 'Cyber Security', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(46, 'Data Science', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(47, 'English', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(48, 'Mathematics & Statistics', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(49, 'Physics', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(50, 'Chemistry', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(51, 'Chemical Engineering', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(52, 'Environment Engineering', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(53, 'Energy Systems Engineering', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(54, 'Food Engineering Technology', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(55, 'Civil Technology', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(56, 'Electrical Technology', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(57, 'Mechanical Technology', '2024-01-13 09:28:35', '2024-01-13 09:28:35', ''),
(58, 'Basic Sciences and Related Studies', '2024-01-13 09:28:35', '2024-01-13 09:28:35', '');

-- --------------------------------------------------------

--
-- Table structure for table `faculties`
--

CREATE TABLE `faculties` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `objectives` text DEFAULT NULL,
  `qualification` text DEFAULT NULL,
  `currentPortfolio` text DEFAULT NULL,
  `diplomas` text DEFAULT NULL,
  `professionalBackground` text DEFAULT NULL,
  `areasOfExpertise` text DEFAULT NULL,
  `currentResearchInterests` text DEFAULT NULL,
  `professionalSkills` text DEFAULT NULL,
  `researchImpact` text DEFAULT NULL,
  `fundedProjects` text DEFAULT NULL,
  `patents` text DEFAULT NULL,
  `coursesCurrentlyTeaching` text DEFAULT NULL,
  `coursesTaughtPreviously` text DEFAULT NULL,
  `supervisedCompletedTheses` text DEFAULT NULL,
  `currentlySupervisingTheses` text DEFAULT NULL,
  `proposedResearchTopics` text DEFAULT NULL,
  `professionalMemberships` text DEFAULT NULL,
  `awardsDistinctions` text DEFAULT NULL,
  `nominations` text DEFAULT NULL,
  `professionalCertificates` text DEFAULT NULL,
  `volunteerWork` text DEFAULT NULL,
  `otherDistinctions` text DEFAULT NULL,
  `personalInterests` text DEFAULT NULL,
  `officeHours` text DEFAULT NULL,
  `personalWebsite` text DEFAULT NULL,
  `fimages` varchar(255) DEFAULT NULL,
  `Scopus` text DEFAULT NULL,
  `ORCID` text DEFAULT NULL,
  `LinkedIn` text DEFAULT NULL,
  `GoogleScholar` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculties`
--

INSERT INTO `faculties` (`id`, `name`, `username`, `password`, `createdBy`, `updatedBy`, `createdAt`, `updatedAt`, `email`, `phoneNumber`, `department`, `designation`, `objectives`, `qualification`, `currentPortfolio`, `diplomas`, `professionalBackground`, `areasOfExpertise`, `currentResearchInterests`, `professionalSkills`, `researchImpact`, `fundedProjects`, `patents`, `coursesCurrentlyTeaching`, `coursesTaughtPreviously`, `supervisedCompletedTheses`, `currentlySupervisingTheses`, `proposedResearchTopics`, `professionalMemberships`, `awardsDistinctions`, `nominations`, `professionalCertificates`, `volunteerWork`, `otherDistinctions`, `personalInterests`, `officeHours`, `personalWebsite`, `fimages`, `Scopus`, `ORCID`, `LinkedIn`, `GoogleScholar`) VALUES
(13, 'Engr. Agha Shiraz A. Khan', 'khan', '$2b$10$Asm7Spy71/oCChtG54iJPOC4S21qSD/0CC9IQFzxhO//we/SsykZi', 'system', 'system', '2024-01-12 21:32:22', '2024-02-05 23:57:44', 'ashirazk@quest.edu.pk', '+923003221331', 'Computer Systems', 'Assistant Professor', 'Driven by a vision of the future where computing stands as the backbone of groundbreaking advancements, I possess a profound interest in exploring the intersection of Deep Learning and High-Performance Computing. As an Assistant Professor at Quaid-e-Awam University of Engineering, Science & Technology since 2005, I have embarked on multiple pioneering projects that leverage cutting-edge technologies to address real-world challenges. My work ranges from facilitating advancements in autonomous vehicles and robotics to leading-edge research in Bioinformatics and Brain-computer Interaction. My accomplishments in the field are underlined by projects such as \'Object tracking quadcopter\', \'3-Dimensional Object Reconstruction using Kinect sensor\', and the \'Self Driving System Using      Machine Learning\'. I am eager to continue this trajectory, pushing the boundaries of what\'s possible in Data Science, AI, and beyond.', '2000 - 2004: Quaid-e-Awam University of Engineering Science & Technology,\nNawabshah, Pakistan. \nB.E. Computer Systems Engineering (Ist Division) \n\n\nSpecialization \n[1] Parallel and Distributed Computing [2] Cluster Computing [3] Brain-\ncomputer Interfacing [4] Machine/deep learning [5] Robotics and Autonomous Vehicle Design\n\n\n\nok sir\n', 'Convener Students\' Consultative Bureau, Member of Syndicate, Member Senate ', '11 June 2007 to 25 July 2007: Faculty Professional Development Program (8th) conducted by Higher Education Commission of Pakistan.\n\nSept 4 – 8, 2007: Intel® Teach program Essential Course, at Umaer Basha Institute of Information Technology, University of Karachi,\n', 'Assistant Professor \n2005 to date: Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah, Pakistan. \n\n\nThesis supervision\n18 year thesis supervision experience for final year projects (B.E and M.E Computer Systems). \n\n', 'Parallel Programming/ Computing: PVM/MPI, Parallel Architectural Design, Cluster Administration and Hardware and Architectural Design, Alchemi .NET Grid Framework, VMD (Virtual Molecular dynamics) Configuration/ Administration, Linux Administration, Microsoft Azure Administration.\n\nComputer Languages: Python, R, C#, C++. \n\nHardware: Microcontroller Programming, Robotics, Ardiono, Raspberry Pi Programming, Ardiopilot for Quadcopters and Autonomous Vehicles.\n\nMultimedia and Graphics: 3d Max Graphical Modeling, Animation and Dynamics, Photoshop, Sound Editing. \n\nWeb Programming: HTML, XML, PHP. \n', '18 Years Research Experience in following areas:\n\nWorked on following Collaborative Research Projects funded nationally \n(see appendix A for further details) \n\nProgramming experience in MPI/PVM based application.\nProgramming experience in Microsoft .NET platform. \nProgramming experience in Microsoft .NET based Grid aware applications.\nMicroprocessor interfacing through parallel port for Robotic arm and machine automation. \nWeb development, programming and administration. \nWorking experience in “Virtual Molecular Dynamics” VMD. \nWorking experience in Matlab (Bioinformatics, Data acquisition and Neural Network Toolbox). \nWorking experience in MAchine learning and deep learning for computer vision, medical imaging, and Autonomous Vehicles, \n', 'Parallel Programming/ Computing: PVM/MPI, Parallel Architectural Design, Cluster Administration and Hardware and Architectural Design, Alchemi .NET Grid Framework, VMD (Virtual Molecular dynamics) Configuration/ Administration, Linux Administration, Microsoft Azure Administration.\n\nComputer Languages: Python, R, C#, C++. \n\nHardware: Microcontroller Programming, Robotics, Ardiono, Raspberry Pi Programming, Ardiopilot for Quadcopters and Autonomous Vehicles.\n\nMultimedia and Graphics: 3d Max Graphical Modeling, Animation and Dynamics, Photoshop, Sound Editing. \n\nWeb Programming: HTML, XML, PHP. \n\n', NULL, '#\nProject Title\nFunding (Rs.)\nSupervisor\nFunded By\n1\nObject tracking quadcopter\n50,000\nEngr. Agha Shiraz A. Khan\nNational ICT R&D\n2\nAutonomous Rover\n30,000\nEngr. Agha Shiraz A. Khan\nNational ICT R&D\n3\nRobotic Arm with computer vision\n30,000\nEngr. Agha Shiraz A. Khan\nNational ICT R&D\n4\nAutomonus Railway Trolley for surviliance\n30,000\nEngr. Agha Shiraz A. Khan\nNational ICT R&D\n5\n3-Dimensional Object Reconstruction using Kinect sensor. \n20,000\nEngr. Agha Shiraz A. Khan\nQUEST, Nawabshah\n6\nCar automation system using Oneshield\n20,000\nEngr. Agha Shiraz A. Khan\nQUEST, Nawabshah\n7\nHome Automation Using Adndroid Using WiFi\n26,840\nEngr. Agha Shiraz A. Khan\nNational ICT R&D\n8\nSelf Driving System Using Machine Learning\n69,680\nEngr. Agha Shiraz A. Khan\nNational ICT R&D\n9\nQUEST Point Tracking System\n4000\nEngr. Agha Shiraz A. Khan\nNational ICT R&D\n\n\n', NULL, NULL, '1. 2008: Hand-writing Detection Method using Visual Basic .NET and BrainNET library \n\n2. 2008: E-Orchestra: A Hand-gesture Recognition Solution in Microsoft Visual Studio C#. \n\n3. 2008: Brain-computer Interaction using Bio-feedback techniques. \n\n4. 2008: NET Grid Computing Framework: A Leveraged Assortment of Microsoft Technologies. \n\n5. 2008: A Biometric Application of Face Recognition: Use of Artificial Neural Networks (ANNs) based on Discrete Cosine Transformation (DCT). \n\n6. 2007: Heart Tissue Simulations and Analysis: Utilization of VMD (Virtual Molecular Dynamics) open-source software for the study of Pericardium. \n\n7. 2007: DNA Computing: An Inspiration towards Computing through Life. \n\n8. 2006: openMosix Based Cluster of Workstations (oCOW): A Practical Implementation of HPC for CPU-intensive Applications based on Single System Image (SSI) Architecture over openMosix Paradigm. \n', '1. 2008: Hand-writing Detection Method using Visual Basic .NET and BrainNET library \n\n2. 2008: E-Orchestra: A Hand-gesture Recognition Solution in Microsoft Visual Studio C#. \n\n3. 2008: Brain-computer Interaction using Bio-feedback techniques. \n\n4. 2008: NET Grid Computing Framework: A Leveraged Assortment of Microsoft Technologies. \n\n5. 2008: A Biometric Application of Face Recognition: Use of Artificial Neural Networks (ANNs) based on Discrete Cosine Transformation (DCT). \n\n6. 2007: Heart Tissue Simulations and Analysis: Utilization of VMD (Virtual Molecular Dynamics) open-source software for the study of Pericardium. \n\n7. 2007: DNA Computing: An Inspiration towards Computing through Life. \n\n8. 2006: openMosix Based Cluster of Workstations (oCOW): A Practical Implementation of HPC for CPU-intensive Applications based on Single System Image (SSI) Architecture over openMosix Paradigm. \n', '3D recontructin of Moen jo Daro\nVitual Classroom\nSmart Classroom\nIOT Based Patient Monitoring System', 'Deep Learning, Machine Learning, HPC, Virtual Reality, Computer Vision, Generative AI', 'Certificate of participation in International Education Exhibition, held at Expo center, Karachi, Pakistan, 17-18th April, 2007.  Certificate of participation in Microsoft Pakistan Developers Conference organized by Microsoft, held at Pearl Continental Hotel, Karachi, Pakistan, 13-15th July, 2005.  Certificate of participation in Microsoft Pakistan Developers Conference organized by Microsoft, held at Pearl Continental Hotel, Karachi, Pakistan, 12-14thJuly, 2006. Certificate of participation in training program Five day Workshop for Latest ICT Trends organized by Department of Computer Systems Engineering QUEST, Pakistan, held at IT Lab QUEST, Pakistan, 11-15th May, 2006.  Certificate of participation in training program One day Workshop for Neural Network based Control Systems organized by Department of Electronics Engineering, MUET, Pakistan, 27th Sep, 2005.  Certificate of participation in training program Digital Library Program, Introduction to Digital Library resources and their Effective Usage organized by QUEST, Pakistan in collaboration with Higher Education Commission Pakistan, 22th October, 2005.  Certificate of participation in training program Research Methodologies organized QUEST, Pakistan in collaboration with Higher Education Commission Pakistan, 12-15th May, 2008. ', NULL, 'Nominated and selected for 45 days course about “Faculty Professional Development Project, 11th June to 25th July, 2007 by Department of Computer Systems Engineering, QUEST, Pakistan.', ' Pakistan Engineering Council (PEC). (2008)  IEEE Computer Society Membership (2008)', 'Currently working on project entitled “High-performance Computational Nano Hemorheology” for Automated clinical setup in Pakistan \nWorked in collaboration with Higher Education Commission Pakistan and Intel® to develop “Course Essentials for Higher Education Studies in Pakistan”. \nParticipated in donating computing resources (8-node Cluster) since two years for collaborative computing for Large Hadron Collider (LHC@home), CERN and Search for Extraterrestrial Intelligence (SETI@home) NASA, powered by Berkeley Open Infrastructure for Network Computing (BIONC) platform in association with Dept: CSE QUEST, Pakistan. ', 'Convener Students\' Consultative Bureau, Member Syndicate', 'Research work in biotechnology and health sciences, Bioinformatics, Quantum\nComputing, DNA Computing, Statistical analysis, Music, Chess, Martial Arts, Astrophysics, Palmistry, Music Composition. \n', '12.30 to 2.30 pm ', 'https://scholar.google.com/citations?hl=en&user=wCrmfPMAAAAJ ', '/fimages/image-1707108293672-51664519.jpg', 'dddd', 'ddsdsss', 'https://www.linkedin.com/in/ahsanullah-soomro-phd-7aba71205/', 'https://scholar.google.com/citations?hl=en&user=wCrmfPMAAAAJ'),
(14, 'Prof. Dr. Intesab Hussain', 'Intesab', '$2b$10$tWYp2koJ2YSETZfWRBq7QuEuOTAUQvWBJQfwxKCgq8crEg9pFql8O', 'system', 'system', '2024-01-13 07:04:57', '2024-02-05 14:01:16', 'Intesab@quest,edu.pk', '0092024435888', 'Computer Systems', 'Professor', 'Best award.\nwinnder of atches:\n\nyes\n', 'M.E\nPHD', 'Chairman Department of Computer systems Engineering', 'sss', 'sss', 'sss', 'sss', 'sss', 'ssss', 'www', 'www', 'ssss', 'ssss', 'ssss', 'sssss', 'ssss', 'ssssssssssss', 'sssss', 'ssss', 'ssssssssss', 'ssssssss', 'sssssss', 'sssssssssssssssssss', 'sss', 'https://scholar.google.com/citations?user=bvkLaNYAAAAJ&hl=en', '/fimages/image-1707109598463-460334106.jpg', NULL, NULL, NULL, NULL),
(15, 'agha khan', 'Agha', '$2b$10$WLse64XslPHEjnmP7Kq3sObnUFRatARkVRSfgm/70zHC12pCBRQoa', 'system', 'system', '2024-01-13 07:23:28', '2024-01-26 02:56:57', 'ashirazk@quest.edu.pk', '+923003221331', 'Computer Systems', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 'Prof. Dr. Fareed Ahmed Jokhio', 'fareed', '$2b$10$oLQOPV4zNfPE9m8KhEO7G.DcDieC2f3tkP/7ug9a9RVUaj0Hr20DS', 'system', 'system', '2024-01-18 21:05:21', '2024-01-18 21:09:05', 'Email:  fajokhio@quest.edu.pk', 'Phone:  0244-9370381-5      Ext.  2148', 'Computer Systems', 'Professor', NULL, 'B.E Computer Systems Engineering(MUET Jamshoro, Pakistan)\nM.E Information Technology (MUET Jamshoro, Pakistan)\nM.Sc Embedded and Intelligent Systems (Halmstad University, Sweden)\nPhD Computer Engin', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(27, 'Prof. Dr. Dadan Khan Bhangwar', 'Dadan', '$2b$10$D707Dm9aozrYahQEj15BXOsQFo7cWPQmXRGXge3dS2Gjiys1TLR/a', 'system', 'system', '2024-01-20 08:35:29', '2024-01-20 08:36:33', NULL, NULL, 'Civil Engineering', 'Professor', NULL, 'PhD', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(28, 'Prof. Dr. Ramzan', 'Ramzan', '$2b$10$CxSGgIDypdmbhEAFsuQE4uMkPkFFa8U3GetWUpQRC.Q5OnVAJN21y', 'system', 'system', '2024-01-20 21:33:23', '2024-01-20 21:36:52', NULL, NULL, 'Civil Engineering', 'Professor', 'nothing', 'Phd', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(29, 'Engr. Ata Muhammad Parhyar', 'atap', '$2b$10$KOCeSfPzN/dMyA7I/.X59.YVuNrwB10l0FE5ROg8pJmNf.jsqdPX6', 'system', 'system', '2024-01-23 23:13:17', '2024-01-23 23:14:48', NULL, NULL, 'Telecommunication Eng.', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(30, 'Prof. Dr. Ubaidullah Rajput', 'Ubaid', '$2b$10$Ax6PC/3hRBz8UrukSNIU1.BxADRyh3TvVN9MJTT80H5pS3B/dx0LK', 'system', 'system', '2024-01-26 02:53:57', '2024-02-05 05:04:15', 'ubaidullah@quest.edu.pk', '0244-9370381-5      Ext.  2639', 'Computer Systems', 'Professor', NULL, 'Qualification\nPhD (Hanyang University, South Korea)\nM.E (NUST)\nB.E (QUEST)', 'Editor QUEST Research Journal', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '/fimages/image-1707109270140-274834973.jfif', NULL, NULL, NULL, NULL),
(31, 'Iftikhar A. Khondhar', 'Iftikhar', '$2b$10$9I0rIb.UjmDKmIu0zqJiRO.NNnAJl.gqJvGuUFVBFpdY6TXLFPNH2', 'system', 'system', '2024-01-26 02:59:08', '2024-01-26 03:01:16', NULL, NULL, 'Computer Systems', 'Assistant Profesor', NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(32, 'Engr. Javed Unar', 'junar', '$2b$10$QaRVzWK4XrW5JFMupvOB5.GzJKSZOULV9F2UfLYUSOhRt2KcuR8tG', 'system', 'system', '2024-01-26 03:04:58', '2024-01-26 03:05:36', NULL, NULL, 'Data Science', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(33, 'Dr. Mehwish Laghari', 'mehwish', '$2b$10$YDmXggryc1DZKUxmQyu0JONc5bI3.Npt1KYXMFaysi3QoKp7rEGJ2', 'system', 'system', '2024-01-26 03:06:06', '2024-01-26 03:07:01', NULL, NULL, 'Data Science', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(34, 'Prod. Dr. Pardeep Kumar', 'pardeep', '$2b$10$ePlFTamQYSU0J6cgV/9G9u2RewrxqeJGOGEG9h5dKDUnShCMptp4y', 'system', 'system', '2024-01-26 03:07:31', '2024-01-26 03:08:37', NULL, NULL, 'Software Engineering', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(35, 'Zeeshan Rasool', 'zeeshan', '$2b$10$9Z/alUE5Czf6t9C5GhMeOuJ/losDYAYn6aIhWT1LsZ82vp.WPw9sW', 'system', 'system', '2024-02-04 07:15:07', '2024-02-04 07:15:30', NULL, NULL, 'Information Technology', NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(36, '', 'wahid', '$2b$10$wC3k5gJZPyqBQjzjWbhH3OHrg1lMlAUATObksZXFcK0M/f363eqhu', 'system', 'system', '2024-02-04 07:22:22', '2024-02-04 07:22:22', NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(37, 'Dr. Ahsanullah Soomro', 'ahsansoomro', '$2b$10$iQXXjhyGZf4zdWrPzF3DyewBDcjTDT3c9Jwm/OZS5.U8rNR2ExXZe', 'system', 'system', '2024-02-05 19:46:56', '2024-02-05 23:18:14', 'ahsan.ee@quest.edu.pk', '+923322994647', 'Environment Engineering', 'Associate Professor', NULL, 'PhD (China), M.E (QUEST), B.E (QUEST)', '', '', 'ASSISTANT PROFESSOR (BPS-19) (7th September, 2020 to 29th August, 2022)Environment Engineering Department,Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah, Sindh, Pakistan ASSISTANT PROFESSOR (BPS-19) (15th November, 2015 to 7th September, 2020)Energy & Environment Engineering Department,Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah, Sindh, Pakistan LECTURER (BPS-18) (1st January, 2011 to 14 November, 2015)Energy & Environment Engineering Department,Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah, Sindh, Pakistan LAB ENGINEER (28 July, 2009 to 31 December 2010)Energy & Environment Engineering Department,Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah, Sindh, Pakistan ENVIRONMENTAL ENGINEER (1st April – 27 July, 2009)Environmental Management Consultants, Karachi', 'Gasification for H2 production', 'Thermochemical reaction engineering for clean energy applications, gasification, waste to energy, CO2 capture & low carbon technology, sorption-enhanced reforming for hydrogen production, desalination and environmental engineering', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'faculty.officeHours = officeHours || faculty.officeHours;', '/fimages/image-1707162544686-420092343.jpg', 'https://www.scopus.com/authid/detail.uri?authorId=57193544389', 'https://orcid.org/0000-0001-6405-6802', 'https://www.linkedin.com/in/ahsanullah-soomro-phd-7aba71205/', 'https://scholar.google.com/citations?hl=en&user=wCrmfPMAAAAJ');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `objectives` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_awards`
--

CREATE TABLE `faculty_awards` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `award` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_courses_taught`
--

CREATE TABLE `faculty_courses_taught` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `course_name` text DEFAULT NULL,
  `level` enum('Undergraduate','Postgraduate') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_experience`
--

CREATE TABLE `faculty_experience` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `experience` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_expertise`
--

CREATE TABLE `faculty_expertise` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `expertise` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_interests`
--

CREATE TABLE `faculty_interests` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `interest` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_memberships`
--

CREATE TABLE `faculty_memberships` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `membership` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_memberships_affiliations`
--

CREATE TABLE `faculty_memberships_affiliations` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) NOT NULL,
  `membership_name` varchar(255) DEFAULT NULL,
  `membership_type` varchar(255) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_objectives`
--

CREATE TABLE `faculty_objectives` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `objective` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_research`
--

CREATE TABLE `faculty_research` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `research_topic` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_research_interests`
--

CREATE TABLE `faculty_research_interests` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) NOT NULL,
  `interest` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_skills`
--

CREATE TABLE `faculty_skills` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `skill` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_social_media`
--

CREATE TABLE `faculty_social_media` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `platform_name` text DEFAULT NULL,
  `link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `publications`
--

CREATE TABLE `publications` (
  `id` int(11) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `publication_type` varchar(255) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publications`
--

INSERT INTO `publications` (`id`, `faculty_id`, `publication_type`, `details`, `createdAt`, `updatedAt`) VALUES
(30, 13, 'book', 'sassassssssssssssss', '2024-01-13 06:38:05', '2024-01-14 20:18:39'),
(36, 13, 'journal', 'ssssssssssssssssssdd', '2024-01-13 06:53:22', '2024-01-14 19:03:10'),
(37, 14, 'journal', 'aaaaaaaaaaaaa', '2024-01-13 07:05:56', '2024-01-13 07:05:56'),
(38, 14, 'conference', 'sssssssssssssssss', '2024-01-13 07:06:01', '2024-01-13 07:06:01'),
(39, 14, 'book', 'sssssssss', '2024-01-13 07:12:25', '2024-01-13 07:16:45'),
(40, 14, 'book', 'ssssssssssss', '2024-01-13 07:12:32', '2024-01-13 07:12:32'),
(41, 14, 'journal', 'ssss', '2024-01-13 07:14:30', '2024-01-13 07:14:30'),
(42, 14, 'conference', 'sssssssssssss', '2024-01-13 07:14:38', '2024-01-13 07:14:38'),
(43, 13, 'conference', 'ssss', '2024-01-14 06:07:27', '2024-01-14 20:30:08'),
(44, 13, 'book', 'qqqqqqqqqqqqq', '2024-01-14 07:21:54', '2024-01-14 07:21:54'),
(46, 13, 'journal', 'ssss', '2024-01-14 08:08:28', '2024-01-14 08:08:28'),
(47, 13, 'bookChapter', 'ssss', '2024-01-14 19:15:40', '2024-01-14 19:15:40'),
(48, 13, 'bookChapter', 'sss', '2024-01-14 19:36:07', '2024-01-14 19:36:07'),
(49, 13, 'book', 'ssss', '2024-01-14 19:38:25', '2024-01-14 19:38:25'),
(50, 13, 'journal', 'aaaaaaaaaa', '2024-01-14 19:45:46', '2024-01-14 19:45:46'),
(51, 13, 'article', 'aaaaaaaaaa', '2024-01-14 19:46:06', '2024-01-14 19:46:06'),
(52, 13, 'bookChapter', 'aaaaaaaaaaa', '2024-01-15 03:31:28', '2024-01-15 03:31:28'),
(53, 27, 'journal', 'aaaa', '2024-01-20 08:37:11', '2024-01-20 08:37:11'),
(54, 13, 'conference', 'fffhjfhjfhfhfhfjhffjhfhjf', '2024-01-20 21:27:25', '2024-01-20 21:27:25'),
(55, 13, 'article', 'jkhhhkhkh', '2024-01-20 21:27:38', '2024-01-20 21:27:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faculties`
--
ALTER TABLE `faculties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `faculty_awards`
--
ALTER TABLE `faculty_awards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_courses_taught`
--
ALTER TABLE `faculty_courses_taught`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_experience`
--
ALTER TABLE `faculty_experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_expertise`
--
ALTER TABLE `faculty_expertise`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_interests`
--
ALTER TABLE `faculty_interests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_memberships`
--
ALTER TABLE `faculty_memberships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_memberships_affiliations`
--
ALTER TABLE `faculty_memberships_affiliations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_objectives`
--
ALTER TABLE `faculty_objectives`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_research`
--
ALTER TABLE `faculty_research`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_research_interests`
--
ALTER TABLE `faculty_research_interests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_skills`
--
ALTER TABLE `faculty_skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `faculty_social_media`
--
ALTER TABLE `faculty_social_media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `faculties`
--
ALTER TABLE `faculties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_awards`
--
ALTER TABLE `faculty_awards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_courses_taught`
--
ALTER TABLE `faculty_courses_taught`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_experience`
--
ALTER TABLE `faculty_experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_expertise`
--
ALTER TABLE `faculty_expertise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_interests`
--
ALTER TABLE `faculty_interests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_memberships`
--
ALTER TABLE `faculty_memberships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_memberships_affiliations`
--
ALTER TABLE `faculty_memberships_affiliations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_objectives`
--
ALTER TABLE `faculty_objectives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_research`
--
ALTER TABLE `faculty_research`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_research_interests`
--
ALTER TABLE `faculty_research_interests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_skills`
--
ALTER TABLE `faculty_skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_social_media`
--
ALTER TABLE `faculty_social_media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `publications`
--
ALTER TABLE `publications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `faculty`
--
ALTER TABLE `faculty`
  ADD CONSTRAINT `faculty_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`);

--
-- Constraints for table `faculty_awards`
--
ALTER TABLE `faculty_awards`
  ADD CONSTRAINT `faculty_awards_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_courses_taught`
--
ALTER TABLE `faculty_courses_taught`
  ADD CONSTRAINT `faculty_courses_taught_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_experience`
--
ALTER TABLE `faculty_experience`
  ADD CONSTRAINT `faculty_experience_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_expertise`
--
ALTER TABLE `faculty_expertise`
  ADD CONSTRAINT `faculty_expertise_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_interests`
--
ALTER TABLE `faculty_interests`
  ADD CONSTRAINT `faculty_interests_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_memberships`
--
ALTER TABLE `faculty_memberships`
  ADD CONSTRAINT `faculty_memberships_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_memberships_affiliations`
--
ALTER TABLE `faculty_memberships_affiliations`
  ADD CONSTRAINT `faculty_memberships_affiliations_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_objectives`
--
ALTER TABLE `faculty_objectives`
  ADD CONSTRAINT `faculty_objectives_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_research`
--
ALTER TABLE `faculty_research`
  ADD CONSTRAINT `faculty_research_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_research_interests`
--
ALTER TABLE `faculty_research_interests`
  ADD CONSTRAINT `faculty_research_interests_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_skills`
--
ALTER TABLE `faculty_skills`
  ADD CONSTRAINT `faculty_skills_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `faculty_social_media`
--
ALTER TABLE `faculty_social_media`
  ADD CONSTRAINT `faculty_social_media_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`);

--
-- Constraints for table `publications`
--
ALTER TABLE `publications`
  ADD CONSTRAINT `publications_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`),
  ADD CONSTRAINT `publications_ibfk_10` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_100` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_101` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_102` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_103` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_104` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_105` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_106` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_107` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_108` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_109` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_11` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_110` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_111` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_112` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_113` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_114` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_115` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_116` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_117` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_118` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_119` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_12` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_120` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_121` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_122` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_123` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_124` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_125` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_126` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_127` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_128` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_129` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_13` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_130` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_131` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_132` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_133` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_134` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_135` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_136` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_137` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_138` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_139` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_14` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_140` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_141` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_142` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_143` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_144` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_145` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_146` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_147` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_148` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_149` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_15` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_150` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_151` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_152` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_153` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_154` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_155` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_156` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_157` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_158` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_159` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_16` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_160` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_161` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_162` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_163` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_164` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_165` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_166` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_167` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_168` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_169` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_17` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_170` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_171` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_172` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_173` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_174` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_175` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_176` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_177` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_178` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_179` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_18` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_180` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_181` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_182` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_183` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_184` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_185` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_186` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_187` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_188` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_189` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_19` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_190` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_191` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_192` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_2` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`),
  ADD CONSTRAINT `publications_ibfk_20` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_21` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_22` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_23` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_24` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_25` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_26` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_27` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_28` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_29` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_3` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_30` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_31` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_32` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_33` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_34` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_35` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_36` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_37` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_38` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_39` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_4` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_40` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_41` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_42` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_43` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_44` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_45` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_46` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_47` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_48` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_49` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_5` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_50` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_51` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_52` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_53` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_54` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_55` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_56` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_57` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_58` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_59` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_6` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_60` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_61` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_62` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_63` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_64` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_65` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_66` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_67` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_68` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_69` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_7` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_70` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_71` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_72` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_73` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_74` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_75` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_76` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_77` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_78` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_79` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_8` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_80` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_81` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_82` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_83` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_84` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_85` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_86` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_87` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_88` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_89` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_9` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_90` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_91` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_92` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_93` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_94` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_95` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_96` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_97` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_98` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publications_ibfk_99` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
