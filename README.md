
# Currency Converter

This is a Node.js terminal-based currency converter application. It allows users to convert amounts from Pakistani Rupees (PKR) to various currencies, including USD, Australian Dollar, Canadian Dollar, UK Pound, Euro, and Indian Rupee.

## Features

- Converts from PKR to:
  - USD (US Dollar)
  - AUSD (Australian Dollar)
  - CAND (Canadian Dollar)
  - Pound (UK Pound Sterling)
  - Euro (European Euro)
  - INDR (Indian Rupee)
  - PKR (Pakistani Rupee)
- User-friendly prompts for selecting the target currency.
- Repeatedly allows users to perform multiple conversions until they choose to exit.

## Prerequisites

- Node.js (v14 or higher) installed on your system.
- The `inquirer` library installed in your project.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the application:
   ```bash
   node <script-name>.js
   ```

2. Follow the on-screen prompts:
   - Enter the amount in PKR that you want to convert.
   - Choose the currency you want to convert to.
   - Confirm if you want to perform another conversion.

3. The application will display the converted amount based on the exchange rate.

## Example

```bash
? Hello! What currency do you want to convert?  USD
? Enter the amount to be converted: 1000
The conversion of PKR 1000rs to USD 3.6$
? Do you want to know more currencies? (y/N)
```

## Exchange Rates

The following exchange rates are hardcoded in the application:

| Currency      | Conversion Rate (1 PKR) |
|---------------|--------------------------|
| USD (Dollar)  | 0.0036                  |
| AUSD (AUD)    | 0.0055                  |
| CAND (CAD)    | 0.0050                  |
| Pound (GBP)   | 0.0029                  |
| Euro (EUR)    | 0.0035                  |
| INDR (INR)    | 0.30                    |
| PKR           | 1                       |

*Note: These are sample rates. For real-world usage, consider integrating an API to fetch real-time exchange rates.*

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

## License

This project is open source and available under the [MIT License](LICENSE).
