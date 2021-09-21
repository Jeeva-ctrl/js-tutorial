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
*/
