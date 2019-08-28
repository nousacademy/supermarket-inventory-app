Gannett Project

### Part 1: Supermarket API User Stories

You are a software developer employed by a local grocery store chain.  The company needs an application which can add, delete, and fetch all produce in the system.

User Stories      User Story

Narrative

Adding a new produce item

As an employee, I want to add a produce item, so that I can add produce items to the database

Deleting a produce item

As an employee, I want to delete produce, so I can remove produce items from the database

Fetch the produce inventory

As an employee, I want to look up produce, so that I understand what produce is available.


Acceptance Criteria
The produce item database is only a single, in-memory array of data and supports the following operations: add, delete, and fetch
The produce includes name, produce item code, and the unit price
The produce item name is alphanumeric and case insensitive
The produce codes are sixteen characters long, with dashes separating each four-character group
The produce codes are alphanumeric and case insensitive
The produce item’s unit price is a number with up to 2 decimal places
Error handling (GET nonexistent produce, bad POST payload, etc.)

The API supports adding and deleting individual produce items. You can also get any produce item in the database.

GET /produce
Description
Get all the produce items in the database
Query Parameters
upperCase
If set to "true" the produce item will be returned uppercased
Default is false
POST /produce
Description
Add a new produce item to the database
Payload (JSON)
Name - required
Produce Code - required
Unit Price - required
DELETE /produce/:name
Description
Delete a produce item from the database
URL Parameters
name
The name of the produce item to delete

Initially, the company has asked for the application to include the following produce item in the new system.


Name


Produce Code

Unit Price

Lettuce

A12T-4GH7-QPL9-3N4M

$3.46

Peach

E5T6-9UI3-TH15-QR88

$2.99

Green Pepper

YRT6-72AS-K736-L4AR

$0.79

Gala Apple

TQ4C-VV6T-75ZX-1RMR

$3.59


### Part 2:  Write API Acceptance Tests

Develop all the acceptance tests identified in Part 1 above. Consider testability, documentation, and other good coding practices in your testing solution. Testing API Routes (endpoints), HTTP Methods, URL Parameters, Query Parameters, Response Codes, and External data stores (if present). Include adequate code coverage, in order to check the coverage of a test you can use a tool like ‘istanbul’.


### Part 3:  Deploying the Application in Kubernetes
Build a container image. https://cloud.google.com/free/

Upload the container image (Google Container Registry / Dockerhub)

Create a container cluster https://cloud.google.com/kubernetes-engine/

Deploy the application to the cluster

Use Google Cloud Build or a CI (Travis, Circle, or Jenkins) tool to automate test execution and deployment of the application.
