state= {
        'DL': 'Delhi',
        'MH': 'Maharashtra',
        'KA': 'suprith',
        'TN': 'Tamil Nadu',
        'UP': 'Uttar Pradesh',
        'HR': 'Haryana'
    }

while True:
        registration_number = input("Enter the vehicle registration number (or type 'exit' to quit): ")

        if registration_number.lower() == 'exit':
            print("Exiting the program.")
            break
        state_code = registration_number[:2]
               
        state = state.get(state_code, 'Unknown State')
                
        print(f"The vehicle belongs to: {state}")