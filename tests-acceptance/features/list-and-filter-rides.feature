Feature:    As registered user
            I want to access, select and filter available rides
            So that I can see which rides are being offered

Scnario: Searching for a simple ride without additional filters
Given I am at the "Caronas Disponíveis" page
Given the system has only registered a ride with "Local de partida" equal to "R. Gomes Taborda" and a second ride with "Local de partida" equal to "Av. Caxangá"
When I have filled in the field "Partida: Rua:" with "R. Gomes Taborda" and I ask the system to search for rides
Then I get a list showing the ride that has "Local de partida" equal to "R. Gomes Taborda", that is the ride that I am eligible to receive