/*

LINQ is a structured query syntax built in C# and VB.NET to retrieve data from different types of data sources such as collections, ADO.Net DataSet, XML Docs, web service and MS SQL Server and other databases.


LINQ queries return results as objects. It enables you to uses object-oriented approach on the result set and not to worry about transforming different formats of results into objects

========================================================================================================================

/ Data source
string[] names = {"Bill", "Steve", "James", "Mohan" };

// LINQ Query 
var myLinqQuery = from name in names
                where name.Contains('a')
                select name;
    
// Query execution
foreach(var name in myLinqQuery)
    Console.Write(name + " ");

  ========================================================================================================================

  IEnumerable and IQueryable are used for data manipulation in LINQ from the database and collections.


  
  ========================================================================================================================
IEnumerable exists in the System.Collections namespace.

IEnumerable is suitable for querying data from in-memory collections like List, Array and so on.

While querying data from the database, IEnumerable executes "select query" on the server-side, loads data in-memory on the client-side and then filters the data.

IEnumerable is beneficial for LINQ to Object and LINQ to XML queries.

  ========================================================================================================================
IQueryable exists in the System.Linq Namespace.

IQueryable is suitable for querying data from out-memory (like remote database, service) collections.

While querying data from a database, IQueryable executes a "select query" on server-side with all filters.

Queryable is beneficial for LINQ to SQL queries.

  ========================================================================================================================

There are two basic ways to write a LINQ query to IEnumerable collection or IQueryable data sources.

Query Syntax or Query Expression Syntax
Method Syntax or Method Extension Syntax or Fluen

  ========================================================================================================================
// Student collection
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

// LINQ Query Syntax to find out teenager students
var teenAgerStudent = from s in studentList
                      where s.Age > 12 && s.Age < 20
                      select s;

  ========================================================================================================================
Method syntax (also known as fluent syntax) uses extension methods included in the Enumerable or Queryable static class, similar to how you would call the extension method of any class.

The compiler converts query syntax into method syntax at compile time.


    ========================================================================================================================
  // Student collection
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

// LINQ Method Syntax to find out teenager students
var teenAgerStudents = studentList.Where(s => s.Age > 12 && s.Age < 20)
                                  .ToList<Student>();
  ========================================================================================================================


  ========================================================================================================================


  ========================================================================================================================



  ========================================================================================================================


  ========================================================================================================================


    ========================================================================================================================
  
  ========================================================================================================================


  ========================================================================================================================


  ========================================================================================================================



  ========================================================================================================================


  ========================================================================================================================

*/
