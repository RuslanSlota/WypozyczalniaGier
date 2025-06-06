# Getting Started

### Reference Documentation

For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/3.4.1/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/3.4.1/maven-plugin/build-image.html)
* [Spring Configuration Processor](https://docs.spring.io/spring-boot/3.4.1/specification/configuration-metadata/annotation-processor.html)
* [Spring Data MongoDB](https://docs.spring.io/spring-boot/3.4.1/reference/data/nosql.html#data.nosql.mongodb)
* [Spring Data Reactive MongoDB](https://docs.spring.io/spring-boot/3.4.1/reference/data/nosql.html#data.nosql.mongodb)
* [Rest Repositories](https://docs.spring.io/spring-boot/3.4.1/how-to/data-access.html#howto.data-access.exposing-spring-data-repositories-as-rest)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/3.4.1/reference/using/devtools.html)
* [Spring for GraphQL](https://docs.spring.io/spring-boot/3.4.1/reference/web/spring-graphql.html)
* [Spring HATEOAS](https://docs.spring.io/spring-boot/3.4.1/reference/web/spring-hateoas.html)
* [Spring Security](https://docs.spring.io/spring-boot/3.4.1/reference/web/spring-security.html)
* [Spring Session](https://docs.spring.io/spring-session/reference/)
* [Spring Web](https://docs.spring.io/spring-boot/3.4.1/reference/web/servlet.html)
* [Spring Web Services](https://docs.spring.io/spring-boot/3.4.1/reference/io/webservices.html)
* [Spring Reactive Web](https://docs.spring.io/spring-boot/3.4.1/reference/web/reactive.html)

### Guides

The following guides illustrate how to use some features concretely:

* [Accessing Data with MongoDB](https://spring.io/guides/gs/accessing-data-mongodb/)
* [Accessing Data with MongoDB](https://spring.io/guides/gs/accessing-data-mongodb/)
* [Accessing JPA Data with REST](https://spring.io/guides/gs/accessing-data-rest/)
* [Accessing Neo4j Data with REST](https://spring.io/guides/gs/accessing-neo4j-data-rest/)
* [Accessing MongoDB Data with REST](https://spring.io/guides/gs/accessing-mongodb-data-rest/)
* [Building a GraphQL service](https://spring.io/guides/gs/graphql-server/)
* [Building a Hypermedia-Driven RESTful Web Service](https://spring.io/guides/gs/rest-hateoas/)
* [Securing a Web Application](https://spring.io/guides/gs/securing-web/)
* [Spring Boot and OAuth2](https://spring.io/guides/tutorials/spring-boot-oauth2/)
* [Authenticating a User with LDAP](https://spring.io/guides/gs/authenticating-ldap/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Producing a SOAP web service](https://spring.io/guides/gs/producing-web-service/)
* [Building a Reactive RESTful Web Service](https://spring.io/guides/gs/reactive-rest-service/)

### Maven Parent overrides

Due to Maven's design, elements are inherited from the parent POM to the project POM.
While most of the inheritance is fine, it also inherits unwanted elements like `<license>` and `<developers>` from the
parent.
To prevent this, the project POM contains empty overrides for these elements.
If you manually switch to a different parent and actually want the inheritance, you need to remove those overrides.

