# Device Staging

## Introduction
This section provides information on how the staging operator can use the StageNow Workstation Tool and Client to select and read a StageNow bar code or NFC tag to configure the target devices, and deploy the profile material to the devices. 

If the device does not include the StageNow Client, use [Rapid Deployment Client](../stageclient?Rapid%20Deployment%20Client) for configuration.

## Selecting a Profile for Staging
To select a profile with which to stage the device:

1. On the PC, select the StageNow icon from the Start menu to open the Workstation Tool. The Staging Operator home screen appears. See [Home Screen](../gettingstarted?Home%20Screen) for field descriptions.

    ![img](images/operator_home2.jpg)

2. Select a profile with which to stage the device(s).

    ![img](images/operator2.jpg)

3. Select the material with which to stage the device, or choose Select All to select all material offered.

4. Select Stage to generate a PDF of the staging material.

    ![img](images/operator3.jpg)



## Device Staging
On the device, select the StageNow icon to launch the StageNow Client.

Note: The StageNow Client requires the DataWedge profile to read bar code data, however restoring DataWedge discards the current StageNow configuration. If StageNow can not scan bar codes after restoring DataWedge, exit and re-launch the StageNow Client on the device.


![img](images/Client_SNicon.jpg)


The application opens with the Barcode Staging screen. To select another option, open the StageNow menu.

![img](images/Client_StageBarcode_Menu.jpg)


The StageNow Client offers the following options in the menu:

* Barcode Staging - stage devices by scanning Staging bar code(s) containing profile data.

* NFC Staging - stage devices by reading an NFC tag containing profile data.

* Log Settings - provides log information for troubleshooting purposes.

* View Client Info - provides client device version information.

### Bar Code Staging
To deploy the selected profile to the device via staging bar codes:

1. On the device, open the StageNow Client.

    ![img](images/Client_StageBarcode1.jpg)


2. Scan the bar code(s) printed from the StageNow Workstation Tool.

    ![img](images/Client_StageBarcode2.jpg)


3. The screen indicates the number of bar codes left to scan. Continue scanning all staging bar codes.

Upon successful deployment, the device displays the following screen.

![img](images/Client_StageBarcode_Success.jpg)

If errors occur during deployment, see Logs for troubleshooting.

![img](images/stagingfailed.png)


### NFC Staging
To deploy the selected profile to the device:

1. On the device, open the StageNow Client.

2. From the StageNow Client menu, select NFC Staging.

    ![img](images/Client_NFCdisabled.jpg)

3. If the NFC Status screen indicates that NFC is disabled, select OK to enable it.

4. Read the NFC tag containing the exported profile data. Refer to the NFC documentation for the appropriate method. The client device returns to the previous application while it processes the tag.

Upon successful deployment, the device displays the success screen.

If errors occur during deployment, see Logs for troubleshooting.

### Staging Wait Conditions
The following pop-up screens can appear during staging, indicating the device is performing an operation and that staging will complete when it is done.

Initializing

Upon a device reboot, MX Framework requires up to 2 minutes to initialize in order to prepare for staging. If staging is initiated during this time, the StageNow Client indicates this via the following pop-up.

![img](images/initializing_popup.png)


Acquiring IP

The following pop-up appears when the device is acquiring an IP address. This is typically seen during scan-and-dock, when the operator scans a bar code and places the device in an Ethernet cradle. Staging pauses until the device acquires the IP address while it performs network operations, such as downloading a file from the StageNow staging server.

![img](images/acquiring_ip_popup.png)


Downloading

The following pop-up indicates that the client is processing a staging profile that contains a setting to download some content from the staging server (particularly an OS update package).

![img](images/file_download.png)


## Logs
If the staging fails, a screen appears indicating this.

![img](images/Client_staging_failed2.jpg)

To review the log to determine the cause of the error, select Yes, or from the StageNow Client menu, select Log Settings and select View Log.

![img](images/Client_StageBarcode_LogSettings_View.jpg)

Locate the error(s) in the log. Refer to the characteristic-error or parm-error in the log contents.

## Client Information
The Client Info screen lists software version information for the device. To view this screen, from the StageNow Client menu, select View Client Info.

![img](images/viewclientinfo.png)

Use this screen to determine whether your device has full or partial StageNow feature functionality.

* Full Functionality - the OSx Version is the same as the MXMF Version.

* Partial Functionality - the OSx Version is less than the MXMF Version. See the Feature Compatibility section of the specific [Setting Types](../CSPreference) to determine if your device supports that feature.

* No Functionality - no OSx Version.

## Rapid Deployment Client
Jelly Bean devices and certain KitKat devices include Rapid Deployment (RD) Client rather than StageNow Client. For staging, these devices scan StageNow-generated bar codes using the RD Client. This connects the client to a network, installs MX and StageNow on the device, and launches StageNow to stage/configure the device using the settings specified in the StageNow Workstation Tool. Due to the older OS, these devices only support partial StageNow functionality.

Specifically, to stage a device that includes RD Client:

1. The administrator uses the StageNow Workstation Tool to generate RD or StageNow profile bar code(s).

2. The operator uses the device to scan the bar code(s). This downloads and installs other device components, including MX Framework and the StageNow Client.

3. The device reboots, and then StageNow Client automatically launches and completes the staging process in order to apply the profile settings. 

![img](images/Client_RDclient.png)
