# Analytics

## About Analytics

### Overview

Analytics Manager setting type configures the Data Analytics Engine installed on the device. Using this setting, you can opt for data collection from the devices and configure metrics to be collected for further analysis. 

### Main Functionality

* Enable/Disable data collection on the device. Using this feature, the user could 'Opt In' for data collection or 'Opt Out' of data collection.
* Set Transport Type for the data collected. Options are Cloud which uploads data to the Cloud, and File which persists data in the device.
* Enable/Disable WWAN, WLAN, Battery, System Manager, and GPS metrics. 

## Parameter Notes

### Analytics Action
Select the Analytics action to perform from a drop-down menu.

* Do not change  - Retains the previously selected option.

* Enable - Enables data collection on the devices.

* Disable - Disables data collection on the devices.

### Transport Method
Select the Data Transport Method to use.

* Do not change - Retains the previously selected option.

* Select Cloud Transport  - Enables collected data to be uploaded in cloud.

* Select File Transport - Enables collected data to be persisted in the file system of the device.

### Group Action
Select the Configuration Action to perform.

* Do not change - Retains the previously selected option.

* Configure Levels for Multiple Groups  - Enables configuration of collection levels for the the various collection groups in the device.

### WWANPerf
Select the Level of Collection for WWAN Performance Statistics.

* Do not change - Retains the previously selected option.

* None - Disables collection  for selected group.

* High - Collects data at a faster frequency and higher number of metrics. Metrics  collected at higher frequency are determined by the respective plug-in in the device.

* Medium  - Collects data at a medium frequency and smaller number of metrics.

* Low  - Collects data at a low frequency and least number of metrics. All metrics which must be collected fall here.

### WLANPerf
Select the Level of Collection for the WLAN Performance Statistics.  

* Do not change - Retains the previously selected option.

* None - Disables collection for selected group.

* High - Collects data at a faster frequency and higher number of metrics. Metrics collected at higher frequency are determined by the respective plug-in in the device.

* Medium - Collects data at a medium frequency and smaller number of metrics.

* Low - Collects data at a low frequency and least number of metrics. All metrics which must be collected fall here.

### SmartBattery
Select the Level of Collection for the Smart Battery Statistics. 

* Do not change - Retains the previously selected option.

* None - Disables collection  for selected group

* High - Collects data at a faster frequency and higher number of metrics. Metrics collected at higher frequency are determined by the respective plug-in in the device.

* Medium  - Collects data at a medium frequency and smaller number of metrics

* Low  - Collects data at a low frequency and least number of metrics. All metrics which must be collected fall here.

### SystemInfo
Select the Level of Collection for the System Information Details such as memory and CPU utilization. 

* Do not change - Retains the previously selected option.

* None - Disables collection  for selected group

* High - Collects data at a faster frequency and higher number of metrics. Metrics collected at higher frequency are determined by the respective plug-in in the device.

* Medium  - Collects data at a medium frequency and smaller number of metrics.

* Low  - Collects data at a low frequency and least number of metrics. All metrics which must be collected fall here.

### GPSInfo
Select the Level of Collection for The GPS Statistics.

* Do not change - Retains the previously selected option.

* None - Disables collection  for selected group.

* High - Collects data at a faster frequency and higher number of metrics. Metrics collected at higher frequency are determined by the respective plug-in in the device.

* Medium  - Collects data at a medium frequency and smaller number of metrics.

* Low  - Collects data at a low frequency and least number of metrics. All metrics which must be collected fall here.


## Feature Compatibility

<table>
	<tr>
		<th>Parameters</th>
		<th>MC32</th>
		<th>MC40</th>
		<th>MC67</th>
		<th>TC55</th>
		<th>TC70</th>

	</tr>
	<tr>
		<td>AnalyticsAction</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>TransportMethod</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>	
	<tr>
		<td>Group Levels</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>	
	<tr>
		<td>WLANPerf</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
		<tr>
		<td>WWANPerf</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>SmartBattery</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>SystemInfo</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>GPSInfo</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>

</table>

