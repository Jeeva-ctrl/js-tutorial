/*

=============================================================================================================================

Factory method is a creational design pattern which solves the problem of creating product objects without specifying their concrete classes.


The factory method design pattern abstract the process of object creation and allows the object to be created at run-time when it is required. 


=============================================================================================================================

sing System;
namespace Factory
{
 /// <summary>
 /// The 'Product' interface
 /// </summary>
 public interface IFactory
 {
 void Drive(int miles);
 }

 /// <summary>
 /// A 'ConcreteProduct' class
 /// </summary>
 public class Scooter : IFactory
 {
 public void Drive(int miles)
 {
 Console.WriteLine("Drive the Scooter : " + miles.ToString() + "km");
 }
 }

 /// <summary>
 /// A 'ConcreteProduct' class
 /// </summary>
 public class Bike : IFactory
 {
 public void Drive(int miles)
 {
 Console.WriteLine("Drive the Bike : " + miles.ToString() + "km");
 }
 }

 /// <summary>
 /// The Creator Abstract Class
 /// </summary>
 public abstract class VehicleFactory
 {
 public abstract IFactory GetVehicle(string Vehicle);

 }

 /// <summary>
 /// A 'ConcreteCreator' class
 /// </summary>
 public class ConcreteVehicleFactory : VehicleFactory
 {
 public override IFactory GetVehicle(string Vehicle)
 {
 switch (Vehicle)
 {
 case "Scooter":
 return new Scooter();
 case "Bike":
 return new Bike();
 default:
 throw new ApplicationException(string.Format("Vehicle '{0}' cannot be created", Vehicle));
 }
 }

 }
 
 /// <summary>
 /// Factory Pattern Demo
 /// </summary>
 class Program
 {
 static void Main(string[] args)
 {
 VehicleFactory factory = new ConcreteVehicleFactory();

 IFactory scooter = factory.GetVehicle("Scooter");
 scooter.Drive(10);

 IFactory bike = factory.GetVehicle("Bike");
 bike.Drive(20);

 Console.ReadKey();

 }
 }
}
=============================================================================================================================

When to use it?

Subclasses figure out what objects should be created.

Parent class allows later instantiation to subclasses means the creation of an object is done when it is required.

The process of objects created is required to centralize within the application.

A class (creator) will not know what classes it will be required to create.

=============================================================================================================================




=============================================================================================================================



=============================================================================================================================


=============================================================================================================================

=============================================================================================================================



=============================================================================================================================




=============================================================================================================================



=============================================================================================================================


=============================================================================================================================

=============================================================================================================================



=============================================================================================================================




=============================================================================================================================



=============================================================================================================================

*/
