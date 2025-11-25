# Employee Contract Generator - Unique Needs

A Docker-based web application for generating employee contracts and letters of offer for Unique Needs. This application provides an easy-to-use form interface for entering employee details and automatically generates properly formatted Word documents ready for download and printing.

## Features

- 🖥️ Clean, modern web interface
- 📝 Comprehensive employee information form
- 📄 Automatic generation of employment contracts and letters of offer
- 💾 Downloadable Word documents (.docx format)
- 🐳 Fully containerized with Docker
- 🎨 Responsive design for mobile and desktop

## Quick Start

### Prerequisites

- Docker installed on your system
- Docker Compose (usually included with Docker Desktop)

### Installation & Running

1. **Clone or navigate to this repository:**
   ```bash
   cd contract-gen
   ```

2. **Build and start the application:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

4. **Stop the application:**
   Press `Ctrl+C` in the terminal, or run:
   ```bash
   docker-compose down
   ```

## Usage

1. Open the application in your web browser (http://localhost:3000)
2. Fill in all required employee details in the form:
   - Offer and contract dates
   - Employee personal information
   - Position details and pay rate
   - Emergency contact information
   - Payroll details (TFN, super fund, bank details)
3. Click "Generate Contract" button
4. The document will automatically download to your computer
5. Open the downloaded Word document to review, sign, and print

## Form Fields

The application collects the following information:

### Dates
- Offer Date
- Contract Date
- Start Date

### Employee Information
- Full Name
- Address
- Phone Number
- Email Address

### Position Details
- Position Title
- Pay Rate (per hour)

### Emergency Contact
- Emergency Contact Name
- Emergency Contact Phone

### Payroll Information
- Tax File Number (TFN)
- Superannuation Fund Name
- Bank BSB (format: XXX-XXX)
- Bank Account Number

## Generated Documents

The application generates a comprehensive Word document containing:

1. **Letter of Offer** - Formal job offer letter with:
   - Company details
   - Position offer
   - Terms and conditions reference
   - Acceptance section for employee signature

2. **Employment Contract** - Complete employment agreement including:
   - Employee details
   - Position description
   - Duties and responsibilities
   - Employment terms and conditions
   - Hours of work and shift arrangements
   - Pay rates and allowances
   - Leave entitlements
   - Employee obligations
   - Termination conditions
   - Signature sections

## Technical Details

### Technology Stack
- **Backend:** Node.js with Express
- **Frontend:** HTML5, CSS3, JavaScript
- **Document Generation:** Docxtemplater, PizZip
- **Containerization:** Docker, Docker Compose

### Project Structure
```
contract-gen/
├── server.js                 # Express server
├── package.json              # Node.js dependencies
├── Dockerfile                # Docker configuration
├── docker-compose.yml        # Docker Compose configuration
├── create_template.py        # Python script to generate template
├── requirements.txt          # Python dependencies
├── public/                   # Frontend files
│   ├── index.html           # Main form interface
│   ├── styles.css           # Styling
│   └── script.js            # Client-side JavaScript
└── templates/               # Document templates
    └── contract_template.docx

```

## Customization

### Modifying the Template

If you need to modify the contract template:

1. Edit the `create_template.py` file
2. Rebuild the Docker container:
   ```bash
   docker-compose up --build
   ```

### Changing the Port

To run on a different port, edit the `docker-compose.yml` file:

```yaml
ports:
  - "8080:3000"  # Change 8080 to your desired port
```

## Development

### Running without Docker

1. **Generate the template:**
   ```bash
   pip install -r requirements.txt
   python create_template.py
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access at:** http://localhost:3000

### Development Mode with Auto-reload

```bash
npm install
npm run dev
```

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, either:
- Stop the service using port 3000
- Change the port in `docker-compose.yml`

### Template Not Found Error
Ensure the Docker container is built with the template:
```bash
docker-compose down
docker-compose up --build
```

### Document Generation Fails
- Check that all required form fields are filled
- Ensure the template file exists in the templates directory
- Check Docker logs: `docker-compose logs`

## Security Notes

- This application handles sensitive employee information (TFN, bank details)
- Deploy behind a secure network or VPN
- Consider adding authentication for production use
- Ensure HTTPS when deploying to production
- Regularly backup generated contracts

## License

Proprietary - Unique Needs

## Support

For issues or questions, contact Unique Needs:
- Phone: 03 63 888440
- Address: 3/322 Hobart road, Youngtown TAS 7249

---

**Unique Needs** - ABN: 43618574031
