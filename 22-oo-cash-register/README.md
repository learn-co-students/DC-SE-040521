# OO Cash Register Lab

## Learning Goals

- Build a class with instance methods.
- Call instance methods inside of other instance methods.
- Use instance methods to track information pertinent to an instance of a class.

## Description

We're going to create an Object Oriented Cash Register that can:

* Add items of varying quantities and prices
* Calculate discounts
* Keep track of what's been added to it
* Void the last transaction

## Instructions

**This is a test-driven lab!** You will need to read the spec file and the test output very carefully to solve this one.

Note that a discount is calculated as a percentage off of the total cash register price (e.g. a discount of 20 means the customer receives 20% off of their total price).

**Hint #1:** Keep in mind that to call an instance method *inside* another instance method, we use the `self` keyword to refer to the instance on which we are operating. For example:

```ruby
class Person

  attr_accessor :age

  def initialize(age = 0)
    @age = age
  end

  def birthday
    self.age += 1
  end
end
```

Follow along with the specs in `spec/cash_register_spec.rb`. Reading along with what the tests are looking for can be really helpful!

Take it one step at a time!

**Hint #2:** The `apply_discount` requires some knowledge about working with an Integer versus a Float in Ruby. Note that `100.class` returns Integer while `100.0.class` returns Float.  Ruby provides methods for changing an object of type Integer to a Float and vice versa.

**Hint #3:** The `void_last_transaction` method will remove the last transaction from the total. You'll need to make an additional attribute accessor and keep track of that last transaction amount somehow. In what method of the class are you working with an individual item?
