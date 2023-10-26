Feature: Flight search
    Scenario: Not logged user is searching for a flight
        Given the user is on the main page
        When the user accepts the cookies
        And the user selects the 'Germany' as the departure country
        And the user selects the 'BER' as the departure airport
        And the user selects the 'Poland' as a destination country
        And the user selects the 'KRK' as the destination airport
        And the user selects the '2024-01-03' as the departure date
        And the user selects the '2024-02-23' as the return date
        And the user selects '2' number of adults
        And the user selects '1' number of children
        And the user clicks the search button
        And the user selects the flights
        And the user selects Basic Fares
        And the user clicks the Continue With Basic button
        And the user clicks the Login Later button
        And the user clicks the title drodpown for '1' passenger
        And the user clicks the Title for passenger
        And the user clicks the title drodpown for '2' passenger
        And the user clicks the Title for passenger
        And the user provides the First Name for '1' passenger
        And the user provides the Last Name for '1' passenger
        And the user provides the First Name for '2' passenger
        And the user provides the Last Name for '2' passenger
        And the user provides the First Name for '1' child
        And the user provides the Last Name for '1' child
        And the user clicks the Continue button
        And the user click Okay Got It button
        And the user clicks the Add Recommended Seats button
        And the user chooses small bags for all passengers
        And the user chooses big bags for all passengers
        And the user clicks the Continue button
        And the user clicks the Continue button
        And the user clicks the Continue button on the extras page
        And the user clicks the Continue button on the transport page
        Then the user sees a login popup