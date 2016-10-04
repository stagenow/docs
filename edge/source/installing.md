# Installation

## Introduction
This section provides instructions for installing, uninstalling, and upgrading the StageNow Staging Solution, including system requirements. 

## StageNow Workstation Requirements
Following are the minimum requirements for the host computer to run the StageNow Workstation Tool:

* Operating system: Microsoft Windows 7 (64 bit)

* Operating memory: 2 GB minimum

* Hard drive storage: 6 GB minimum (if .Net Framework is not already installed)

* Screen resolution: 1366 x 768 (16:9 ratio) recommended

* .Net Framework 4.5. 

* .Net 4.5.1 is included in the StageNow installation wizard if required, and also available at http://www.microsoft.com

* StageNow Workstation Tool installer, available at http://www.zebra.com/support

* A PDF reader for supporting staging material, Adobe Acrobat Reader recommended.

* Java Runtime (JRE) to use Audio staging

* Wireless network interface card to use the Wi-Fi Hotspot feature

## Installing the StageNow Workstation Tool
Installing the StageNow Workstation Tool also auto-installs Microsoft .NET Framework 4.5, the Staging Database, and the Staging Server.

See [Upgrading the StageNow Workstation Tool](../installing?Upgrading%20the%20StageNow%20Workstation%20Tool) if you have an older version of the StageNow Workstation Tool installed on the host PC.

To install the Workstation Tool:

1. Download the setup package staging_solution.[Version Number].exe.

2. Double-click the setup package file.

3. If you do not already have .Net Framework 4.5, the installation process prompts you to install it.

4. Select Install. When Framework installation completes, a window appears stating that the wizard is
preparing to install StageNow.

   ![img](images/installation/Install_Initial.jpg)

5. Select Next to continue.

6. Select I accept the terms of the license agreement and select Next.

   ![img](images/installation/Install_UserName.jpg)

7. Enter a User Name and Company Name, and specify who can use the Workstation Tool.

8. Select Next.

   ![img](images/installation/Install_Password.jpg)

9. Enter a password for the administrator and select Next.

   >Note:  
   >All StageNow profiles and data are associated with this password.

10. Select Next to accept the default folder, or select Browse first to choose another installation folder.

11. Select Next to accept the current settings, or select Back to make a change. The wizard indicates that it is configuring the software for installation, then indicates that installation is almost complete.

   ![img](images/installation/Install_Checkboxes.jpg)

12. If desired, select checkboxes to create a shortcut on the desktop, and/or to launch the StageNow Workstation Tool, and select Next.

   ![img](images/installation/Install_PDF.jpg)

13. Because staging material is presented in PDF files, the Wizard prompts you to download a PDF reader, or skip this if you already have a reader installed. Select the appropriate option and then select Finish. 

If you chose to download Adobe Acrobat Reader, the reader installation page opens for quick download and installation.

## Upgrading the StageNow Workstation Tool

If you have an older version of the StageNow Workstation Tool installed on the host PC, upgrade it.

>Note:  
>Complete all incomplete profiles before upgrading the StageNow Workstation tool. Profiles that are incomplete after upgrading can exhibit unexpected behavior.

1. Download the setup package staging_solution.[Version Number].exe.

2. Double-click the setup package file. InstallShield detects the existing version and displays the following message.

   ![img](images/installation/Upgrade_DetectOlderVersion.jpg)

3. Select Yes to proceed with the upgrade, or No to retain the existing version and abort the upgrade. If you select Yes, the next message asks whether to retain or discard existing StageNow data (Settings, Profiles, etc.)

   ![img](images/installation/Upgrade_MigrateData.jpg)

4. Select the desired option to continue the upgrade.

   >Note:  
   >If you choose to retain existing data, the install process does not request an administrator password as it retains the existing password.

5. See [Installing the StageNow Workstation Tool](../installing?Installing%20the%20StageNow%20Workstation%20Tool) for the remainder of the installation instructions.

## Uninstalling StageNow

To uninstall the StageNow Workstation Tool:

1. Select Control Panel > Programs > Programs and Features.

2. Double-click StageNow. The Installation Wizard opens.

3. Follow the steps in the Wizard to complete the uninstallation.

   ![img](images/installation/Uninstall_RemoveData.jpg)

4. Select Finish to complete the uninstallation.

## StageNow Client Installation

StageNow supports all Lollipop, KitKat, and Jelly Bean Android devices from Zebra. Lollipop and KitKat devices that ship with the StageNow Client installed support all device configuration options that the StageNow Tool offers.

Zebra Jelly Bean and certain KitKat devices may not include the StageNow Client but do include Rapid Deployment (RD) Client. For staging, these devices can scan StageNow-generated RD bar codes, which cause the RD Client to connect to a network and then auto-install MX 5.0 for KitKat devices, MX 4.4 or lesser for Jelly Bean devices, and the StageNow Client on the device. The StageNow Client can then be used to scan StageNow profile bar codes for configuration.

Once devices that did not include the StageNow Client are staged using the RD Client, they still may only support partial StageNow functionality due to limitations of the device OS. See the Feature Compatibility section of the specific Setting Type in the user help file packaged with the StageNow Workstation Tool to determine if your device supports a given feature.