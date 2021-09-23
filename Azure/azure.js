/*

Currently, the Azure App Service platform contains these services:

Web Apps -  For running web and api applications in Azure
Mobile Apps - For running the backend for mobile applications in Azure
Function Apps - For running small blocks of code in Azure that can be triggered by outside sources, like a message on a queue

Service Fabric powers a lot of services in Azure, including App Service.

Azure Service fabric keeps your App Service running.


For instance, when you have a Web App that is running a website, Service Fabric makes sure that it runs on a VM, in a Microsoft datacenter.

And if that VM fails, or if the underlying hardware fails, Service Fabric moves the Web App to another VM and/or physical server, so that it continues to run. 


 When you scale your Web App, by, for instance scaling it out over multiple instances, Service Fabric replicates your Web App over multiple VMs and keeps those running.

The VMs that Service Fabric uses, are the actual things that your App Service runs on. And you can choose what type of VM Azure should use to run your App Service. 

You do this by configuring the App Service Plan.

An App Service Plan is the logical abstraction that represents one or more VMs that your App Service runs on. It is a representation of compute resources, like CPU, memory and disk space. 

This is the unit that you pay for when you use App Service. You pay for the App Service Plan, not for the actual App Service apps that you run in it. And the nice thing about App Service Plans is that you can run as many App Service apps in there as you want. 

You could, for instance, run 10 Web Apps in the same App Service Plan. Obviously, if you run 10 applications in one App Service plan, they all share the same compute resources.

So, you have to keep in mind that all of these applications can run within the limits of the CPU, memory and disk space of your App Service Plan.

==============================================================================================================================


==============================================================================================================================
Azure Sentinel is a cloud-native security information and event manager (SIEM) platform that uses built-in AI to help analyse large volumes of data across an enterprise—fast. 

Azure Sentinel aggregates data from all sources, including users, applications, servers and devices running on-premises or in any cloud, letting you reason over millions of records in a few seconds. 

It includes built-in connectors for easy onboarding of popular security solutions. Collect data from any source with support for open standard formats like CEF and Syslog.

==============================================================================================================================

Defense in Depth (DiD) is an approach to cybersecurity in which a series of defensive mechanisms are layered in order to protect valuable data and information. 

If one mechanism fails, another steps up immediately to thwart an attack. This multi-layered approach with intentional redundancies increases the security of a system as a whole and addresses many different attack vectors

Data
Stored in a database
Stored on disk inside virtual machines
Stored on a SaaS application such as Office 365
Stored in cloud storage

Application
Ensure applications are secure and free of vulnerabilities.
Store sensitive application secrets in a secure storage medium.
Make security a design requirement for all application development.

Compute
Secure access to virtual machines.
Implement endpoint protection and keep systems patched and current.

Networking
Limit communication between resources.
Deny by default.
Restrict inbound internet access and limit outbound, where appropriate.
Implement secure connectivity to on-premises networks.

Perimeter
Use distributed denial of service (DDoS) protection to filter large-scale attacks before they can cause a denial of service for end users.
Use perimeter firewalls to identify and alert on malicious attacks against your network.

Identity and access
Control access to infrastructure and change control.
Use single sign-on and multi-factor authentication.
Audit events and changes.


Physical security
Physical building security and controlling access to computing hardware within the data center is the first line of defense

==============================================================================================================================
You can use an Azure network security group to filter network traffic to and from Azure resources in an Azure virtual network. 

A network security group contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, several types of Azure resources.

For each rule, you can specify source and destination, port, and protocol.

When an NSG is associated with a subnet, the ACL rules apply to all Virtual Machine instances of that subnet


==============================================================================================================================
A Denial-of-Service (DoS) attack is an attack meant to shut down a machine or network, making it inaccessible to its intended users. 

DoS attacks accomplish this by flooding the target with traffic, or sending it information that triggers a crash.

In both instances, the DoS attack deprives legitimate users (i.e. employees, members, or account holders) of the service or resource they expected.

==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================

==============================================================================================================================


==============================================================================================================================


==============================================================================================================================


*/
