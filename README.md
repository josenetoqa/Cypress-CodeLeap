#  Recruitment process for the QA Tester position at CodeLeap

On this test my goal was to create a comprehensive set of test cases that would help to ensure the quality of the proposed solution.

I created test cases for all features of the proposed solution. I also suggested additional test cases to increase the test coverage.

I also create 2 automation tests with [cypress.io](http://cypress.io)

## Installation of Cypress

To run these Cypress tests, which I developed with code reuse, follow these steps:

1. Clone the repo
   ```sh
   git clone https://github.com/josenetoqa/Bugbank
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Execute Cypress to execute the tests


    * Execute the following comammnd to run Cypress in Hedless mode
   ```js
    npx cypress run 
   ```
    * Execute the following comammnd to open Runner Console
    ```js
    npx cypress open
    ```


The test cases are written in a clear and concise manner In some test cases i  have used standard test case format with. They have this below fields :

- **Test case Title:** A title for each test case.
- **Description:** A brief description of the test case.
- **Preconditions:** The conditions that must be met before the test case can be executed.
- **Test steps:** The steps that must be followed to execute the test case.
- **Expected results:** The expected results of the test case.

I have used Gherkin scenarios to write the test cases some scenarios and other only suggest the title.

I would also suggest testing the security of all pages including the prevention of cross-site scripting (XSS) and SQL injection attacks.

## Test Cases

<details><summary><b>Login Test Cases</b></summary>

- Validate login in with valid credentials.
- Validate login in with invalid credentials.
- Validate if the "Login" button is disabled when the username field is left blank.
- Validate login if the username contains invalid characters.

```gherkin
Scenario: Validate login in with valid credentials.
		Given I am on the Signup Page
    When  I enter a valid user
		And   I click on the "Enter" button
		Then  I should be redirected to main Screen

Scenario: Validate login in with invalid credentials.
		Given I am on the Signup Page
    When  I enter a invalid user
		And   I click on the "Enter" button
		Then  I shouldn't be redirected to main Screen
	
Scenario: Validate if the "Login" button is disabled when the username field is left blank.
    Given I am on the login page
    When  I leave the username field empty
    Then  I should see the "Enter" button disabled

Scenario: Validate login if the username contains invalid characters.
    Given I am on the login page
    When  I leave the username with invalid characters
    Then  I should see the "Enter" button disabled
```
</details>
<p></p>

<details><summary><b>Create post Test Cases</b></summary>


- Creating a new post by entering a title and content.
- Verify if the user can see the new post in the list of posts.
- Verify that the new post is sorted by the most recent on top.
- Validate user can read the body of a post.
- Validate user cannot create a new post if they leave the title or body blank.
- Verify that the user cannot create a new post if the title or body contains invalid characters.
</details>
<p></p>

<details><summary><b>Open delete alert Test Cases</b></summary>

- **Test case Title:** Validate if a user can open a delete button for their own post.
    - **Description:** This test case have a intention of validade if the delete.
    - **Preconditions:** The user need to be logged.
    - **Test steps:**
        - Step 1 : Access the Signup Page
        - Step 2 : Digit the user name and click on “Enter” button.
        - Step 3 :  Be redirect to the main page.
        - Step 4 :  Create a new post
        - Step 5 : Validate if a delete button appear for their own post
    - **Expected results:** The delete button need to appear only on the user own post
    
- **Test case Title:** Validate if a user can confirm the deletion of their own post.
    - **Description:** This test case have a intention of validade if the delete.
    - **Preconditions:** The user need to be logged.
    - **Test steps:**
        - Step 1 : Access the Signup Page
        - Step 2 : Digit the user name and click on “Enter” button.
        - Step 3 :  Be redirect to the main page.
        - Step 4 :  Create a new post
        - Step 5 : Click on delete button on the post
        - Step 6 :  Click on confirm the deletion of their own post.
        - Step 7 : Validate if the post is delete.
    - **Expected results:** The delete button need to appear only on the user own post
</details>

<p></p>
<details><summary><b>Open edit modal Test Cases</b></summary>


- Verify that the user can open an edit modal for their own post.
- Verify that the user can edit the title and content of their own post.
- Verify that the user cannot open an edit modal for a post that they did not create.

</details>

<p></p>
<p></p>

Create by [José Neto](https://www.linkedin.com/in/jdaneto/)