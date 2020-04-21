:beginner: **SPRING BOOT - REST API - HIBERNATE - ORACLE CRUD**

:electron: **INTRODUCTION**

:lock: **CHALLENGES WITH SPRING**
   1. configuring DispatcherServlet
   2. configuring InternalResourceViewResolver
   3. configuring Hibernate with spring integration
   4. configuring Tomcat
   5. configuring JAR files and their versions
   6. deploying spring application onto Tomcat
   7. should be explicitly deployed on tomcat

:key: **SOLUTIONS WITH SPRINGBOOT**
1. Configuration
   1. minimal or close to zero Configuration
   2. easy hibernate integration
   3. no need to configure Tomcat
   4. need not worry about jar JAR file versions and their dependencies
   5. automagic deployment
   6. cloud-ready applications
   7. uses spring-core, spring-mvc and all the other modules of spring

:electron: **SETUP**
:one: Create a spring starter project
- https://start.spring.io
- import the project
- Configure the dependencies -web, spring data jpa, dev tools

:two: **CONFIGURE HIBERNATE DATASOURCE**
`application.properties`
-configure the datasource for hibernate
spring.jpa.hibernate.ddl-auto=create  
spring.jpa.database-platform=org.hibernate.dialect.Oracle10gDialect  
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:XE  
spring.datasource.username=hr  
spring.datasource.password=hr  
spring.datasource.driver-class-name=oracle.jdbc.driver.OracleDriver  
spring.jpa.show-sql=true  

-configure apache tomcat port

server.port=9090

:beetle: Caused by: java.lang.IllegalStateException: Cannot load driver class: oracle.jdbc.driver.OracleDriver

:three: **CONFIGURE OJDBC**
```xml
		<dependency>
			<groupId>com.oracle</groupId>
			<artifactId>ojdbc7</artifactId>
			<version>12.1.0.2</version>
		</dependency>
```
- download maven 
http://us.mirrors.quenda.co/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip
- add C:\_software\apache-maven-3.6.3\bin to the path.
- test maven : cmd> mvn --version
- mvn install:install-file -Dfile=F:\software\jars\ojdbc7-12.1.0.2.jar -DgroupId=com.oracle -DartifactId=ojdbc7 -Dversion=12.1.0.2 -Dpackaging=jar
- check jar file in maven local repo C:\Users\Enzo\.m2\repository\com\oracle\ojdbc7\12.1.0.2
-verify C:\Users\Enzo\.m2\repository\com\oracle\ojdbc7\12.1.0.2\ojdbc7-12.1.0.2.jar

:four:

:bulb: Terminologies
- Archetype : a template
  - Artifact : a project 
  - Group : the company
  - Version : version of the product.
