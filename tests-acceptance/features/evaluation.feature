Feature: As a passenger
         I want to evalulate driver
         So that I can tell others about him

Scenario: grade 5 to driver
Given I am at the "my rides" page
Given I have driver "Victor" at the evaluation list
When I evaluate "Victor" with "5" stars
Then I cannot see "Victor" at the evaluation list

Scenario: grade 1 to driver
Given I am the "my rides" page
Given I have driver "Victor" at the evaluation list
When I evaluate "Victor" with "1" stars
Then I cannot see "Victor" at the evaluation list

Scenario: see driver evaluation
Given I am at the "users" page
Given I have driver "Victor" at the users list
When I try to access "Victor"
Then I can see driver "Victor" have a "4.5" rating

Scenario: cancel ride
Given I am at the "requested rides" page
Given I have driver "Victor" at "13" hours to "Boa Viagem" at the drives list
When I try to cancel the ride with "Victor" at "13" hours to "Boa Viagem"
Then I cannot see a ride with "Victor" at the rides list