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


  ========================================================================================================================



  ========================================================================================================================


  ========================================================================================================================

*/
