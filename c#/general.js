In Hashtable, you can store key/value pairs of the same type or of the different type. In Dictionary, you can store key/value pairs of same type.

 In Hashtable, there is no need to specify the type of the key and value. ... The data retrieval is faster than Hashtable due to no boxing/ unboxing.


 ==============================================================================================================================================================

 A temporary table in SQL Server, as the name suggests, is a database table that exists temporarily on the database server. 
 
 A temporary table stores a subset of data from a normal table for a certain period of time. ... 
 
 Temporary tables are stored inside “tempdb” which is a system databas

  If you create a temporary table in one session and log out, it will not be there when you log back in




==============================================================================================================================================================
The PE file you are talking about is the "Portable Executable" format.

 Almost every EXE and DLL on the Windows platform is formatted in PE format.
 
  To answer your question, it's a general format and every assembly generated after compilation of your project will be a PE file
  
==============================================================================================================================================================

https://pvs-studio.com/en/blog/posts/csharp/0808/

Iteratoer keyword indicate compiler that the method is Iteratoer

The yield keyword is used to build generators of element sequences. These generators do not create collections. Instead, the sequence stores the current state - and moves on to the next state on command. Thus, memory requirements are minimal and do not depend on the number of elements. It's not hard to guess that generated sequences can be infinite.

To begin, create a method that generates the sequence you need. The only limitation here is that the method must return one of the following types:

IEnumerable
IEnumerable<T>
IEnumerator
IEnumerator<T>


static IEnumerator<int> GetInts()
{
  Console.WriteLine("first");
  yield return 1;

  Console.WriteLine("second");
  yield return 2;
}

static void Main()
{
  IEnumerator<int> intsEnumerator = GetInts(); // print nothing
  Console.WriteLine("...");                    // print "..."

  intsEnumerator.MoveNext();                   // print "first"
  Console.WriteLine(intsEnumerator.Current);   // print 1
}

Local variables, fields, and properties
Local variables initialized inside yield methods, retain their values between MoveNext method calls

yield break
Aside from yield return, C# offers you another statement - yield break. It allows you to stop sequence generation - that is, exit the generator for good. If the MoveNext method executes yield break, the return is false. No changes to fields or properties can make the generator work again. However, if the method that uses yield is called for the second time - it's a completely different story, because a new object generator is created. That generator would not have encountered yield break.

==============================================================================================================================================================


==============================================================================================================================================================