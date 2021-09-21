/*

CQRS stands for Command and Query Responsibility Segregation, a pattern that separates read and update operations for a data store. 

Implementing CQRS in your application can maximize its performance, scalability, and security. 


The flexibility created by migrating to CQRS allows a system to better evolve over time and prevents update commands from causing merge conflicts at the domain level.

Disadvantages of the CQRS Pattern

It adds unnecessary complexity if applications have simple CRUD operations, which can be achieved by traditional architectural styles.

As we require separate models for read & write, code duplication is inevitable.

*/
