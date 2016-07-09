#Profiles

## Introduction
This section provides information for the staging administrator on creating and managing profiles. The StageNow Workstation Tool offers pre-defined Wizards that represent common use cases for deploying information to mobile devices within the enterprise. 

### Welcome Tips
Several screens throughout the Workstation Tool offer helpful pop-up tips. Select the checkbox offered in order to dismiss the tip permanently. Select OK to dismiss the pop-up.

![img](images/Review_withHelppopup.jpg)


## Creating a Staging Profile
The staging administrator uses the provided StageNow Wizards to configure settings which define software configuration and installation for enterprise devices. When creating a profile for staging the device, the administrator progresses through the following steps in the banner provided in the Workstation Tool:

![img](images/banner.jpg)

* [Config](../stagingprofiles?Configure) (StageNow and RD) - The setting information entered in the StageNow Config section is stored within StageNow bar codes, NFC tags, and/or an audio file.  The setting information entered in the RD Config section is stored within RD bar codes.  Note that the RD Config section only appears if you turned on Legacy Mode in the [Settings](../gettingstarted?Settings) screen. The amount of settings created in this section affect the number of bar codes and/or NFC tags that the system generates later.

* [Deployment](../stagingprofiles?Deployment) - This information includes settings that do not reside in StageNow bar codes, NFC tags, or audio file, and is represented as a file on the StageNow deployment server and so requires network connection. Reading the bar code or NFC tag, or playing an audio file created in the Config section connects the client device to the server and points to this file for deployment. Note that this section does NOT appear in the Connect Network, Manage Device Security, and Wipe a Device Wizards.

* [Review](../stagingprofiles?Review) - The Review section presents all setting information entered in the Config and Deployment sections in a single page. The administrator can add comments, complete the profile, or return to any setting to update it.

* [Publish](../stagingprofiles?Publish) - The Publish section allows the administrator to select the method of delivery (linear bar codes, PDF417 bar codes, NFC tags, or Audio file) for the completed profile, as well as test, publish, and stage the profile.

### Profile States
As you progress through the Wizard, the top right corner of the window reflects the state of the profile: 

![img](images/profilestatus.jpg)

* Incomplete - The profile is not yet complete.

* Complete - All information required by the Wizard is included in the profile, but it is not yet tested to ensure the profile functions as intended.

* Tested - The profile was tested to determine whether it is sufficiently operational for staging. It is not yet visible to the operator.

* Published - The profile is visible to the operator.

* Staged - The operator has acquired the profile, i.e., generated bar codes, exported data to write to an NFC tag, or downloaded the audio file for staging the device.

### Navigating the Wizard
Following are tips for navigating through the Wizard.

Click on the sections of the primary banner (e.g., StageNow Config, RD Config) to view that section. Note that you must complete each section in order before you can click ahead to the next section.

![img](images/banner.jpg)


You can also use the Back button to return to the previous section and the Continue button to proceed to the next section.

![img](images/backcontinue.jpg)


Similarly, click on the oval buttons in the secondary banner to view that sub-section. You must also complete each sub-section before clicking ahead to the next one. 

![img](images/bubbles.jpg)

The small round buttons adjacent to each oval button indicate the status of that section:

  *  A green check icon indicates that section is complete.

  *  A green eye icon indicates the section you are viewing.

  *  An orange icon with a pencil indicates the section that is in process.

  *  An orange icon with a pause indicates the section that is in process while you are viewing another section.

  *  A greyed-out oval with no adjacent round button indicates a section not yet started.

You can also use the arrows at the beginning and end of the secondary banner to scroll through these sub-sections. 

![img](images/arrow.jpg)


When you select Yes for a secondary banner item, additional sub-sections are added to the banner. 

![img](images/subsection.jpg)

To edit the profile name, click the pencil icon next to the name.

![img](images/RenameProfile.jpg)

At any point, click the Home button to return to the Home screen. 

![img](images/homebutton.jpg)


When populating a setting template window within a Wizard, to make the setting available for selection when creating other profiles, select the Save Setting for Re-use checkbox, and enter a name for the setting. See [Save for Reuse](../settingconfig?Save%20for%20Reuse) for more information.

## Configure
To create a profile, open the StageNow Workstation Tool and log in.

Select Create New Profile, and then select the device MX version from the drop-down menu. The tool retains the current selection when configuring future profiles.

Initially, a warning appears indicating that selecting an incorrect version can cause staging to fail. If your devices run multiple versions of MX, select the lowest common version. Select the checkbox on this window if you do not need to view it in future profile creations.

![img](images/WizardList_MXdropdown.jpg)

Select one of the following Wizards and select Create.

* [Configure a Device](../Profiles/configdevice)

* [Connect Network](../Profiles/ConnectNetwork)

* [Enroll in an MDM](../Profiles/enrollmdm)

* [Manage Applications](../Profiles/manageapps)

* [Manage Device Security](../Profiles/managesecurity)

* [Perform OS Update](../Profiles/osupdate)

* [Wipe a Device](../Profiles/wipedevice)

* [Xpert Mode](../Profiles/xpertmode)

After completing the StageNow Config and RD Config sections of the Wizard, proceed to the next section of the Wizard.  Certain Wizards include a Deployment section, whereas others proceed to the Review section.

### MX 6.0 Selection

Selecting MX 6.0 from the MX version drop-down menu supports a Wi-Fi hotspot option for some Wizards. If you select MX 6.0 for the applicable Wizards, the first Wizard window prompts you to select one of the following options from the drop-down menu:

* The devices I wish to provision are currently not connected to a network. I will define a network with this profile that will be used for staging.

* The devices I wish to provision are already connected to a network that will be used for staging. 

* I wish to use the WiFi Hotspot feature which will automatically create a network for staging using this computer's network card. 

![img](images/profiles/configdevice_wifi.jpg)

Select an option and proceed to the instructions for the selected Wizard.

>Note:  
>The second and third options are only supported by Wizards that utilize the Deployment section of the tool.

## Deployment
Use the Deployment section of the Wizard to specify the subset of the settings that define what the profile does, and store these settings on a deployment server. See the specific [Profile Wizard](../ProfileWizards) for instructions. 
Note that this section is not available in certain Wizards. 

Wizards that include the Deployment section require that device(s) access the Deployment Server in order to acquire the information provided there. Specifically, the device and the server should be on the same network, or there should be routing from the device network that allows connection to the Deployment Server. 

![img](images/createprofile_deploy1.jpg)

## Review
The Review section of the Wizard allows you to verify your selections.

![img](images/OSUpdate_Review.jpg)

1. Select Expand to view the StageNow configuration and RD configuration settings. This setting list offers the following fields:
    * Step - The section step where the Administrator added the setting.
    * Description - A user-defined "friendly" description of the setting.
    * Last Updated - Last time the profile was updated.
    * View - Click to view/modify the setting.

2. Select Change to make any changes to the settings.

3. Select the icon next to Profile Description to enter a description for the profile.

    ![img](images/profiledescription.jpg)


4. Enter the description and select Save.

5. Encryption for staging data is selected by default in order to protect the sensitive data encoded in the profile bar code or NFC tag. See [StageNow Encryption](../gettingstarted?StageNow%20Encryption)  for more information. De-select this checkbox if necessary to save space.

6. Select Complete Profile to proceed to the Publish window. The profile status at the top right of the screen is now Complete.

## Publish
The Publish section of the Wizard allows you to select a staging method, test the method for profile functionality, and make the profile available to the staging operator.

This window lists the profile delivery types available, with dates and times of when the profile was Last Tested, Published, and Last Staged.

### Staging a Bar Code Profile
To stage a bar code profile:

1. Select the Barcode tab. 

    ![img](images/wifi_publish.jpg)

2. To create a direct connection via hotspot instead of using the configured staging server, select the Yes, use Wifi Direct checkbox. This allows staging without requiring an external Wi-Fi network and with a single staging bar code, and eliminates the need for reprinting bar codes if there is a profile change.

3. Select the checkbox for PDF417 or Linear to specify the type of bar code for deployment, or choose Select All to select all bar code types.

4. Select Test to test the functionality of the profile before publishing. This generates a PDF of test staging bar code(s). While this step is optional, it is important to determine whether the profile functions as intended before making it available to the operator(s) for staging devices.

    ![img](images/Publish_BarCodeTab_Test.jpg)

5. If the staging material functions properly, select Publish to publish the material for operator use. Note that the administrator can choose to publish only certain types of bar codes that were successfully tested, and publish the others when they are ready.

6. Enter staging instructions for the operator.

    ![img](images/ConnectNetwork_Publish_Instructions.jpg)

7. Select Publish Now.

    ![img](images/Publish_BarCodeTab_published.jpg)

8. To make the profile available for staging, select Stage. This generates a PDF of staging bar code(s) that devices can scan for staging. See [Device Staging](../stageclient).

9. To export the profile for an MDM or for StageNow, select the Export For MDM or Export For StageNow button. See [Exporting Staging Profiles](../stagingprofiles?Exporting%20Staging%20Profiles).


To unpublish a profile to remove operator access, select Unpublish.

### Staging an Audio Profile
To stage an audio profile:

1. Select the Audio tab. If this is the first time using this feature, a tour provides help screens that specify technical and environmental requirements for audio staging. 

    ![img](images/Publish_AudioTab_Instructions.jpg)

2. Progress through the instruction screens and select DONE to dismiss the tour.

    ![img](images/Publish_AudioTab.jpg)

3. To create a direct connection via hotspot instead of using the configured staging server, select the Yes, use Wifi Direct checkbox.

4. Select Test Audio to play the file in order to verify the functionality before publishing, or the Download icon to save the audio file before testing. While this step is optional, it is important to determine whether the profile functions as intended before making it available to the operator(s) for staging devices.

    ![img](images/Publish_AudioTab_Test.jpg)

5. If the audio file functions properly, select Publish Profile to publish the audio file for operator use. 

6. Enter staging instructions for the operator, and select Publish Now.

7. To stage the clients using the audio file, select Play Audio, or Download to save the audio file for other administrators or operators to use. See [Device Staging](../stageclient).

8. To export the profile for an MDM or for StageNow, select the Export For MDM or Export For StageNow button. See [Exporting Staging Profiles](../stagingprofiles?Exporting%20Staging%20Profiles).


To unpublish a profile to remove operator access, select Unpublish.

### Staging an NFC Profile
To stage an NFC profile:

1. Select the NFC tab. 

    ![img](images/Publish_NFCTab.jpg)

2. To create a direct connection via hotspot instead of using the configured staging server, select the Yes, use Wifi Direct checkbox.

3. Select Test to test the functionality of the profile before publishing. This saves the NFC tag as a .bin file for testing. While this step is optional, it is important to determine whether the profile functions as intended before making it available to the operator(s) for staging devices.

4. If the staging material functions properly, select Publish to publish the material for operator use. 

5. Enter staging instructions for the operator.

    ![img](images/ConnectNetwork_Publish_Instructions.jpg)

6. Select Publish Now.

7. To make the profile available for staging, select Stage. This save the NFC tag as a .bin file that devices can read for staging. See [Device Staging](../stageclient).

8. To export the profile for an MDM or for StageNow, select the Export For MDM or Export For StageNow button. See [Exporting Staging Profiles](../stagingprofiles?Exporting%20Staging%20Profiles).


To unpublish a profile to remove operator access, select Unpublish.


## Copying a Staging Profile

To copy a profile in order to create a new, similar profile:

1. Select the Copy icon next to the profile. ![img](images/icon_copy.jpg)

2. Enter a new name for the profile, and select Save. 

    ![img](images/profile_copy_name.jpg)

3. A window indicates the profile was copied successfully. Select OK.

4. See the next section for instructions on editing the new profile.

## Editing a Staging Profile

>Note:  
>In-progress profiles created in StageNow 2.0 may not function after upgrading to the latest StageNow Tool.

To edit a profile:

1. Select the profile from the home screen. 

2. Use the navigation UI in the Wizard to locate the setting to update. See [Navigating the Wizard](../stagingprofiles?Navigating%20the%20Wizard).

    ![img](images/profile_edit_setting.jpg)

3. Select Edit to enable the fields for updating.

4. Make the required changes and select Save, or select Cancel to discard the changes.

5. Select Continue and proceed through the Wizard.

6. In the Review section, select Complete Profile to move to the Publish section to generate updated bar codes, NFC tags, or audio files.

## Exporting Staging Profiles

>Note:  
>Incomplete profiles cannot be exported.

To export a single profile for StageNow or for an MDM:

1. Select the Export icon next to the profile. ![img](images/icon_export.jpg)

    ![img](images/Export_choice.jpg)

2. Select whether to export for an MDM or for within the StageNow tool.

    ![img](images/Export_hidden.jpg)

3. If you select Export For StageNow, to lock the profile so it cannot be changed and hide the details from other administrators, select the check box, and then select OK.

4. Select a location for the profile and select Save. A window indicates that the profile was exported successfully.

5. Select OK.

Note: RD settings are not exported and so cannot be imported.

### Exporting All Profiles

>Note:  
>Incomplete profiles are not exported.

To export all staging profiles:

1. Select All Profiles.

    ![img](images/AllProfiles.jpg)

2. Select the Export Profile(s) button.

    ![img](images/Export_hidden.jpg)

3. To lock the profile so it cannot be changed and hide the details from other administrators, select the check box.

4. Select OK.

    ![img](images/Export_allzip.jpg)

5. The default name for the zip file containing all profiles is MULTI_PROFILES.ZIP. Select a location for the profile and select Save. A window indicates that the profile was exported successfully.

6. Select OK.

## Importing a Staging Profile

To import a profile:

1. Select All Profiles.

    ![img](images/AllProfiles.jpg)

2. Select the Import Profile(s) button.

    ![img](images/importprofile1.jpg)

3. Select a file using the browse button, and select Import. A window indicates that the profile was imported successfully 

4. Select OK. The profile appears in the profiles list.

Profiles that were locked during export appear with a lock icon.

![img](images/Profile_withLock.jpg)

Profiles created in StageNow 2.0 are imported as MX 4.3 profiles.

Note: RD settings are not exported and so cannot be imported.


## Deleting a Staging Profile

To delete a profile:

1. Select the trash icon next to the profile. ![img](images/icon_trash.jpg)

    ![img](images/profile_delete.jpg)

2. Select OK to confirm the deletion.

3. A window indicates that the profile was successfully deleted. Select OK.


## Upgrading Profiles

StageNow 2.3 and later allow the administrator to upgrade profiles created in any released or beta StageNow version to the latest version, i.e., StageNow 2.4.
