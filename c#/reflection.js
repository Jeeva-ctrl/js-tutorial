/*
Reflection provides objects (of type Type) that describe assemblies, modules, and types. 

You can use reflection to dynamically create an instance of a type, 

bind the type to an existing object, 

or get the type from an existing object and invoke its methods or access its fields and properties. 

If you are using attributes in your code, reflection enables you to access them. 

*/

// Using GetType to obtain type information:
int i = 42;
Type type = i.GetType();
Console.WriteLine(type);
The output is: System.Int32.



// Using Reflection to get information of an Assembly:
Assembly info = typeof(int).Assembly;
Console.WriteLine(info);

The output is: System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e.


We can also implement late binding using .NET Reflection. 


At runtime, Reflection uses the PE file to read the metadata about an assembly. Reflection enables you to use code that was not available at compile time

It can be used effectively to find all the types in an assembly and/or dynamically invoke methods in an assembly. This includes information about the type, properties, methods and events of an object. 

With reflection, we can dynamically create an instance of a type, bind the type to an existing object, or get the type from an existing object and invoke its methods or access its fields and properties. We can also access attributes using Reflection. 

In short, Reflection can be very useful if you don't know much about an assembly

using System;  
namespace Reflection  
{  
    class TypeGetTypeDemo  
    {  
        static void Main(string[] args)  
        {  
            // Obtain type information using the static Type.GetType() method.  
            // (don't throw an exception if Car cannot be found and ignore case).  
            Type t = Type.GetType("Reflection.Car", false, true);   
            Console.WriteLine(t.FullName);  
            Console.ReadLine();  
        }  
    }  
}  


Reflection is when managed code can read its own metadata to find assemblies.

With reflection in C#, you can dynamically create an instance of a type and bind that type to an existing object. 

Moreover, you can get the type from an existing object and access its properties.

 When you use attributes in your code, reflection gives you access as it provides objects of Type that describe modules, assemblies, and type



// dynamically load assembly from file Test.dll
Assembly testAssembly = Assembly.LoadFile(@"c:\Test.dll");

// get type of class Calculator from just loaded assembly
Type calcType = testAssembly.GetType("Test.Calculator");

// create instance of class Calculator
object calcInstance = Activator.CreateInstance(calcType);

Assembly
Module
Enum
MethodInfo
ConstructorInfo
MemberInfo
ParameterInfo
Type
FieldInfo
EventInfo
PropertyInfo

