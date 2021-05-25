# Object Relations Practice Code Challenge - Magazines

## Introduction

For this assignment, we'll be working with a Magazine domain.

We have three models: `Magazine`, `Subscription`, and `Reader`.

For our purposes, a `Magazine` has many `Subscription`s, a `Reader` has many `Subscription`s, and a `Subscription` belongs to a `Magazine` and to an `Reader`.

`Magazine` - `Reader` is a many to many relationship.

**Note**: You should draw your domain on paper or on a whiteboard _before you start coding_. Remember to identify a single source of truth for your data.

## Topics

- Active Record Migrations
- Object Relationships
- Active Record Queryng

## Instructions

To get started, run `bundle install` while inside of this directory.

Build out all of the methods listed in the deliverables. The methods are listed in a suggested order, but you can feel free to tackle the ones you think are easiest. Be careful: some of the later methods rely on earlier ones.

**Remember!** This code challenge does not have tests. You cannot run `rspec` and you cannot run `learn`. You'll need to create your own sample instances so that you can try out your code on your own. Make sure your associations and methods work in the console before submitting.

We've provided you with a tool that you can use to test your code. To use it, run `rake console` from the command line. This will start a `pry` session with your classes defined. You can test out the methods that you write here. You are also encouraged to use the `seeds.rb` file to create sample data to test your models and associations.

Writing error-free code is more important than completing all of the deliverables listed - prioritize writing methods that work over writing more methods that don't work. You should test your code in the console as you write.

Similarly, messy code that works is better than clean code that doesn't. First, prioritize getting things working. Then, if there is time at the end, refactor your code to adhere to best practices. 

**Before you submit!** Save and run your code to verify that it works as you expect. If you have any methods that are not working yet, feel free to leave comments describing your progress.

## What You Already Have

The starter code has migrations and models for the initial `Reader`, `Magazine` and `Subscription` models, and seed data for some `Reader`s and `Magazine`s. The schema currently looks like this: 

#### `readers` Table

<table border="1" cellpadding="4" cellspacing="0">
  <tr>
    <th>Column</th>
    <th>Type</th>
  </tr>
  
  <tr>
    <td>name</td>
    <td>string</td>
  </tr>
  <tr>
    <td>email</td>
    <td>string</td>
  </tr>
 </table>
 

#### `magazines` Table

<table border="1" cellpadding="4" cellspacing="0">
  <tr>
    <th>Column</th>
    <th>Type</th>
  </tr>
  
  <tr>
    <td>title</td>
    <td>string</td>
  </tr>
</table>

You will need to create the migration for the `subscriptions` table using the attributes specified in the deliverables below.

## Deliverables

Write the following methods in the classes in the files provided. Feel free to build out any helper methods if needed.

Deliverables use the notation `#` for instance methods, and `.` for class methods.

Remember: Active Record give your classes access to a lot of built-in methods! Keep in mind what methods Active Record gives you access to on each of your classes when you're approaching the deliverables below.

### Migrations

Before working on the rest of the deliverables, you will need to create a migration for the `subscriptions` table. 

- A `Subscription` belongs to a `Magazine`, and a `Subscription` also belongs to an `Reader`. In your migration, create any columns your `subscriptions` table will need to establish these relationships.
  - The `subscriptions` table should also have a `price` column that stores an integer.

After creating your migration, use the `seeds.rb` file to create instances of your `Subscription` class so you can test your code.

**Once you've set up your `Subscription` class**, work on building out the following deliverables.

### Object Relationship Methods

Use Active Record association macros and Active Record query methods where appropriate (i.e. `has_many`, `has_many through`, and `belongs_to`).

#### Subscription

- `Subscription#reader`
  - should return the `Reader` instance for this subscription
- `Subscription#magazine`
  - should return the `Magazine` instance for this subscription

#### Magazine

- `Magazine#subscriptions`
  - returns a collection of all `Subscription` instances for this magazine
- `Magazine#readers`
  - returns a collection of all `Reader` instances who are subscribed to this magazine

#### Reader

- `Reader#subscriptions`
  - should return a collection of all `Subscription` instances for this reader
- `Reader#magazines`
  - should return a collection of all `Magazine` instances that this reader is subscribed to

### Aggregate and Association Methods

#### Subscription
- `Subscription#print_details`
  - `puts` a string to the terminal to display the details of the subscription
  - the string should be formatted like this: `{reader name} subscribed to {magazine title} for ${subscription price}`

#### Reader

- `Reader#subscribe(magazine, price)`
  - takes a `magazine` (an instance of the `Magazine` class) and a `price` (integer) as arguments, and creates a new `subscription` in the database associated with the magazine and the reader
- `Reader#total_subcription_price`
  - returns the total price for all the reader's subscriptions
- `Reader#cancel_subscription(magazine)`
  - takes a `magazine` instance and removes the subscription for this reader
  - you will have to delete a row from the `subscriptions` table to get this to work!

#### Magazine

- `Magazine#email_list`
  - returns a `String` of a semi-colon separated list of emails for all the readers subscribed to this magazine
  - the string should be formatted like this: `email1@example.com;email2@example.com;email3@example.com`
- `Magazine.most_popular`
  - returns the `Magazine` instance with the most subscribers


## Rubric

### Active Record Associations
1. No associations, no foreign key on the table.
2. Associations attempted in the model but are incorrect; foreign key is on a table but in the wrong spot.
3. Relationships properly created. Associations lead to the correct behavior but may have used the wrong macro or manually written out the methods the macro builds for us.
4. Relationships properly created, save minor mistakes in advanced deliverables. May implement advanced query methods with iterators instead of using built-in methods.
5. Relationships properly created. Advanced query methods use appropriate built-in methods.

### Build classes using OO Ruby Syntax

1. Class code has a syntax or runtime error. Code does not run at all, or exits with an error, or most Object-oriented deliverables are not implemented.
2. No syntax errors. Some deliverables function correctly. Mixes up syntax for class and instance methods, refers to variables in the wrong scope, or uses `self` incorrectly, leading to logical errors. Method and variable names do not correspond to their respective behavior or data types. Methods might be duplicated, or code includes unused methods without a clear purpose.
3. Correct class syntax for the deliverables submitted. May be incomplete or missing deliverables. Most code generally expresses intent: method and variable names match their behaviors and data types. Methods are not duplicated. Code does not have unused or methods without a clear purpose.
4. Correct class syntax for all of the submitted code. Code express intent: method and variable names indicate their behavior and data types. Some deliverables might not be complete. No methods are duplicated.
5. Correct class syntax for all deliverables, all deliverables complete. Code expresses intent: method and variable names indicate their behavior and data types, with the correct pluralization. No methods are duplicated. All methods have a clear purpose. Shared functionality is factored out into helper methods. Appropriate use of attr\_\* macros.

### Model relationships using Ruby

1. Submitted code does not relate models to each other through methods or data.
2. Models relate to each other, but incompletely. Relationship methods are missing or have logic errors, store data on the wrong model, or are missing a single source of truth.
3. Models relate to each other as specified in the instructions. Data is stored on the correct models, relationship methods are defined on the right models, and the logic correctly implements the relationships. Aggregate methods using the relationships may be incomplete or have errors.
4. Models relate to each other as specified in the instructions. Aggregate methods work, but might not use helper methods effectively.
5. Models relate to each other as specified in the instructions. Aggregate methods use helper methods effectively.

### Solve problems with collections of data

1. Does not attempt to solve collections problems, or has syntax errors in collection code.
2. Collections methods have runtime or logic errors. Collections methods may use the wrong iterators, have incorrect logic, or many of the collections methods are unimplemented.
3. Some collections methods work correctly, though several might be unimplemented. Code may not use the appropriate built in method for each problem, or duplicate logic instead of using helper methods.
4. All collections methods are implemented and function correctly. Most use appropriate higher-level built-in methods. Methods may duplicate logic instead of using helper methods.
5. All collections methods implemented and function correctly, using appropriate higher-level built-in methods. Shared logic is factored out to helper methods.
