#Enroll in an MDM
Use this Wizard to enroll a device for management by an MDM.  This downloads, installs, configures, and launches an MDM agent.  This Wizard also allows you to connect to a staging and/or production network and reboot the device. 

##Enrolling in an MDM for MX Versions 4.3, 4.4, and 5.0

1. Select Create New Profile.

2. Select the MX version from the drop-down menu. Note that different versions of MX support different features, so select the MX version that supports the features required.

3. Select the Enroll in an MDM Wizard, and select Create.

    ![img](images/profiles/enrollmdm_name.jpg)

4. Enter a name for the profile and select Start.

    Note: During profile creation, the top right of the window indicates the status of the profile, e.g., Incomplete.

5. To choose to connect to this network using StageNow bar codes, select Yes, and then select the type of network. Select Continue. See [Profiles / Connect Network](../Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window.

    ![img](images/profiles/enrollmdm2.jpg)

    Note: This wizard includes a Deployment section. Deployment requires that the host computer and the device(s) are on the same network. 

6. If offered, select whether to connect to this network using the Rapid Deployment (RD) Client. Note that the RD Config section only appears if you turned on Legacy Mode in the [Settings](../gettingstarted?Settings) screen. Select Yes for devices that don't include the StageNow Client. See [Rapid Deployment (RD) Client](../stageclient?Rapid%20Deployment%20Client) for more information.

7. If you selected Yes, choose whether to set up Wi-Fi options and/or Wi-Fi profiles. See [Setting Types / Wifi mgr](../csp/wifi).

8. In the Deployment section of the wizard, if you selected MX 5.1, select the MDM agent for which to enroll.

    ![img](images/profiles/enrollmdm_agent.jpg)

If you select Soti:


   a. Select whether to download a configuration file. If you select Yes, see [Setting Types / File mgr](../csp/file) for instructions.

   b. Select a method for performing the enrollment and select Continue.

* For No, I want to Download the file to my device, see [Setting Types / File mgr](../csp/file) for instructions.

* For Yes, I want to Install the file, see [Setting Types / AppMgr](../csp/app) for instructions.

   c. Select whether to launch the Soti APK.  If you select Yes, see [Setting Types / Intent](../csp/intent) for instructions.

   d. Select whether to download the the MDMNow App.

   e. Skip to step 17.

If you select Airwatch:


   a. Select whether to download a configuration file. If you select Yes, see [Setting Types / File mgr](../csp/file) for instructions.

   b. Select whether to enroll an Mx Service. If you select Yes, select a method for performing the enrollment and select Continue.
      
      * For No, I want to Download the file to my device, see [Setting Types / File mgr](../csp/file) for instructions.
      
      * For Yes, I want to Install the file, see [Setting Types / AppMgr](../csp/app) for instructions.

   c. Select whether to enroll for an MDM Agent. If you select Yes, select a method for performing the enrollment and select Continue.
      
      * For No, I want to Download the file to my device, see [Setting Types / File mgr](../csp/file) for instructions.
      
      * For Yes, I want to Install the file, see [Setting Types / AppMgr](../csp/app) for instructions.

   d. Select whether to download a Remote Control APK file. If you select Yes, select whether the file is present on the device and select Continue.
      
      * For No, I want to Download the file to my device, see [Setting Types / File mgr](../csp/file) for instructions.
      
      * For Yes, I want to Install the file, see [Setting Types / AppMgr](../csp/app) for instructions.

   e. Select whether to download an MDMNow App.

   f. Skip to step 17.  

If you select Others, continue to the next step.

9. Select a method for performing the enrollment and select Continue.
* For No, I want to Download the file to my device, see [Setting Types / File mgr](../csp/file) for instructions.
* For Yes, I want to Install the file, see [Setting Types / AppMgr](../csp/app) for instructions, and skip to Step 10.

    ![img](images/profiles/enrollmdm_method.jpg)

10. Select whether or not to download an MDM agent support APK. If you select Yes, see [Setting Types / File mgr](../csp/file) for instructions. 

11. Select whether or not to download an MDM configuration file. If you select Yes, see [Setting Types / File mgr](../csp/file) for instructions.

12. Enter a target path and source file location for the MDM Agent APK, and select Continue.

13. Select whether or not to install an MDM. If you select Yes, see [Setting Types / AppMgr](../csp/app) for instructions.

14. Select whether or not to launch an MDM Agent APK. If you select Yes, see [Setting Types / Intent](../csp/intent) for instructions.

15. If creating an MX5.1 profile, select whether or not to download an MDMNow app. If you select Yes...??

16. If creating an MX5.1 profile, select whether or not to install an MDMNow app. If you select Yes...??

17. Select whether or not to connect to a production network. If you select Yes, select a network type.  See [Profiles / Connect Network](../Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window.

18. Select whether or not to reboot a device. If you select Yes, see [Setting Types / Power](../csp/power) for instructions.

19. Select Continue to proceed to the [Review window](../stagingprofiles?Review).


##Enrolling in an MDM for MX Version 5.1

To create an Enroll in an MDM profile for MX 5.1:

1. Select Create New Profile.

2. Select the MX 5.1 from the drop-down menu. 

3. Select the Enroll in an MDM Wizard, and select Create.

    ![img](images/profiles/enrollmdm_name.jpg)

4. Enter a name for the profile and select Start.

    Note: During profile creation, the top right of the window indicates the status of the profile, e.g., Incomplete.

5. To choose to connect to this network using StageNow bar codes, select Yes, and then select the type of network. Select Continue. See [Profiles / Connect Network](../Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window.

    ![img](images/profiles/enrollmdm2.jpg)

    Note: This wizard includes a Deployment section. Deployment requires that the host computer and the device(s) are on the same network. 

6. If offered, select whether to connect to this network using the Rapid Deployment (RD) Client. Note that the RD Config section only appears if you turned on Legacy Mode in the [Settings](../gettingstarted?Settings) screen. Select Yes for devices that don't include the StageNow Client. See [Rapid Deployment (RD) Client](../stageclient?Rapid%20Deployment%20Client) for more information.

7. If you selected Yes, choose whether to set up Wi-Fi options and/or Wi-Fi profiles. See [Setting Types / Wifi mgr](../csp/wifi).

8. In the Deployment section of the wizard, select the MDM agent to enroll for.

    ![img](images/profiles/enrollmdm_agent.jpg)

9. Select a method for performing the enrollment and select Continue.

* For No, I want to Download the file to my device, see [Setting Types / File mgr](../csp/file) for instructions.
* For Yes, I want to Install the file, see [Setting Types / AppMgr](../csp/app) for instructions, and skip to Step 10.

    ![img](images/profiles/enrollmdm_method.jpg)


* If you select Soti, select whether to download a configuration file, whether to install the Soti App .APK file or download it to the device, from where to download the app file (FileMgr setting??), the path for installing the app (App setting??), whether to launch the Soti APK (Intent setting??), whether to download the the MDMNow App 

* If you select Airwatch, select whether to download a configuration file, whether to enroll an Mx Service,  whether to enroll for an MDM Agent, whether to download a Remote Control APK file, whether to download an MDMNow App (setting??? FileMgr??)  

* If you select Others, select whether to download or install an APK file, whether to download an MDM Agent Support APK file (FileMgr setting??), whether to download an MDM configuration file (FileMgr setting??), the path for downloading an MDM Agent APK (FileMgr setting??), the path for installing an MDM (App setting??), whether to launch an MDM Agent APK (Intent setting??), whether to download the MDMNow App (setting??? FileMgr??), whether to install an MDMNow App (App setting??)

(all end with:)
whether to connect to another network, and whether to reboot the device. see [Setting Types / File mgr](../csp/file) for instructions.



9. Select whether or not to download an MDM agent support APK. If you select Yes, see [Setting Types / File mgr](../csp/file) for instructions. 

10. Select whether or not to download an MDM configuration file. If you select Yes, see [Setting Types / File mgr](../csp/file) for instructions.

11. Select whether or not to install an MDM. If you select Yes, see [Setting Types / AppMgr](../csp/app) for instructions.

12. Select whether or not to launch an MDM Agent APK. If you select Yes, see [Setting Types / Intent](../csp/intent) for instructions.

13. Select whether or not to connect to a production network. If you select Yes, select a network type.  See [Profiles / Connect Network](../Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window.

14. Select whether or not to reboot a device. If you select Yes, see [Setting Types / Power](../csp/power) for instructions.

15. Select Continue to proceed to the [Review window](../stagingprofiles?Review).