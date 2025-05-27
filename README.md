🚀 SecureStack Insight - MVP Plan
Hey there! I’m Jason Wilkerson, a full-stack developer, IT nerd, cybersecurity enthusiast, and machine learning fanatic who’s obsessed with all things tech. This project, SecureStack Insight, is my brainchild—a wild ride to dive headfirst into cloud architecture and wrestle with the mighty AWS ecosystem. The idea? To craft a scalable, customer-ready solution using AWS microservices, and man, has it been a steep learning curve! With over 10 programming languages under my belt, I figured I was ready for the challenge. The toughest hurdle? Wading through those endless AWS documentation pages—seriously, a whole job could be dedicated to mastering just a handful of those microservices with their intricate security regs, zero-trust models, and more. But I powered through, and now I’m stoked to share the result!

This MVP was all about gaining hands-on experience with scalable cloud solutions, and I’d say it delivered big time. I’ve leveraged cutting-edge tech like Node.js + Express for the backend, React (hosted on S3 + CloudFront) for the frontend, Terraform for infra management, and DynamoDB for lightning-fast, schema-less storage. Security’s locked down with IAM roles, an S3 bucket policy, and EC2 roles (auth skipped for this sample project), while CloudWatch keeps an eye out for DDoS or other attacks. With interstate routing and AWS’s multi-AZ infrastructure, this web app can serve users worldwide with top-notch reliability. Let’s dive into the details!

🌟 Overview
SecureStack Insight is my passion project turned MVP—a sleek asset management dashboard that lets you view, create, and delete assets with ease. It’s a monorepo packed with a React frontend on S3 with CloudFront, a Node.js + Express backend on Elastic Beanstalk, and a DynamoDB database, all orchestrated by Terraform. I skipped auth for this phase to focus on the core, but the security and monitoring foundations are rock-solid. This README is your roadmap, blending my tech journey with clear, actionable insights—perfect for fellow cloud explorers!

✅ Stack
Frontend: React, hosted on S3 with CloudFront for global CDN magic.
Backend: Node.js + Express, deployed via Elastic Beanstalk for scalable API goodness.
Database: DynamoDB for fast, no-schema storage that scales like a dream.
Infra Setup: Fully managed with Terraform—my go-to for IaC wizardry.
Security: Locked down with IAM roles, S3 bucket policies, and EC2 roles.
Auth: Skipped for MVP (future me will tackle this!).
Monitoring: Basic CloudWatch integration to catch those pesky DDoS attacks.

📦 MVP Feature Scope
🌐 Frontend (React)
Dashboard: A snappy UI to view, create, and delete assets—my pride and joy!
Asset Table: Shows Name, Type, Status, Notes in a clean, responsive table.
Form: Easy-peasy form to add new assets with a bit of validation flair.
API Integration: Talks to the backend via RESTful endpoints—smooth as butter.
🧠 Backend (Node.js on Elastic Beanstalk)
REST Endpoints:
GET /assets: Fetch all assets in one go.
POST /assets: Add a shiny new asset.
DELETE /assets/:id: Zap an asset by ID.
DynamoDB Integration: AWS SDK makes database chats a breeze.
CORS Enabled: Frontend and backend play nice together.
☁️ AWS Resources (via Terraform)
S3 Bucket: Holds the React build (stackguardbucket—my first AWS baby!).
CloudFront Distribution: Delivers content globally with low latency.
Elastic Beanstalk Environment: Runs my Node.js backend like a champ.
DynamoDB Table: Assets table with id as the key.
IAM Roles/Policies:
Beanstalk EC2 Instance Profile: DynamoDB access granted.
S3 Bucket Policy: Public read for the frontend.
VPC: Default VPC for now—custom VPC is on my radar!
📂 Repo Structure (Monorepo)
bash

Copy
/securestack-insight
├── /frontend              # React app (react-admin-app) - my UI playground
│   ├── /src               # React components and logic
│   ├── /public            # Static goodies
│   ├── package.json       # Frontend deps
│   └── .gitignore         # Keeps the mess out
├── /backend               # Node.js + Express API - my backend beast
│   ├── /src               # Server, routes, services
│   ├── /ebextensions      # Elastic Beanstalk tweaks
│   ├── package.json       # Backend deps
│   ├── Procfile           # Beanstalk magic
│   └── .gitignore         # More mess prevention
├── /terraform             # Terraform configs - my IaC kingdom
│   └── terraform.tf       # AWS infra code
└── README.md              # You’re here!
Monorepo Vibes: Keeps everything in one spot for my dev flow.
🗓️ 5-Day Shipping Plan

Day	Tasks
Day 1	Kicked off with a React scaffold + Terraform for S3 and CloudFront.
Day 2	Built the dashboard UI + mocked an API to test the flow.
Day 3	Spun up the Node.js API + Terraform for Beanstalk and DynamoDB.
Day 4	Wired frontend ↔ backend + tested asset CRUD—nailing the basics!
Day 5	Polished the UI, wrote this README, and prepped demo goodies.
Timeline Win: Wrapped up by May 26, 2025—proof I can hustle!
✅ Deliverables I Can Provide
Terraform Templates: HCL files for S3, CloudFront, Elastic Beanstalk, DynamoDB, and IAM.
Node.js Express API: Backend with DynamoDB hooks and REST endpoints.
React Dashboard: Fully functional asset management UI.
CORS Config: Frontend-backend handshake sorted.
Deployment Scripts: AWS CLI commands for S3 and Beanstalk.
GitHub README: This epic guide with my voice!
Architecture Diagram: PNG/SVG + Draw.io source to show off the stack.
🛠️ Useful Commands
Build Project
Push the React build to S3:

bash

Copy
aws s3 sync C:\Users\pring\OneDrive\Desktop\Apply\FullStackAWSProject\frontend\react-admin-app\build\ s3://stackguardbucket/ --region us-east-1
Run Project
Peek at the S3 bucket from react-admin-app:

bash

Copy
aws s3 ls s3://stackguardbucket/
Backend Dev
Fire up the local backend:

bash

Copy
cd C:\Users\pring\OneDrive\Desktop\Apply\FullStackAWSProject\backend
npm start
Test the health check:

bash

Copy
curl http://localhost:8080/health
Deploy to Elastic Beanstalk:

bash

Copy
cd C:\Users\pring\OneDrive\Desktop\Apply\FullStackAWSProject\backend
eb deploy
Terraform Magic
Init and apply Terraform:

bash

Copy
cd C:\Users\pring\OneDrive\Desktop\Apply\FullStackAWSProject\terraform
terraform init
terraform apply
DynamoDB Fun
Set up the Assets table and sample data:

bash

Copy
aws dynamodb create-table --table-name Assets --attribute-definitions AttributeName=id,AttributeType=S --key-schema AttributeName=id,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --region us-east-1
aws dynamodb put-item --table-name Assets --item '{"id":{"S":"1"},"name":{"S":"Web Server"},"type":{"S":"EC2"},"status":{"S":"Active"},"notes":{"S":"Production server"}}' --region us-east-1
Troubleshooting
Check Git status:

bash

Copy
git status
Nuke large files from history (if needed):

bash

Copy
git filter-repo --path node_modules/ --invert-paths
git push origin main --force
📊 Architecture Diagram


Source: architecture-diagram.xml (Draw.io format).
Breakdown: Shows React (S3 + CloudFront) → Node.js (Elastic Beanstalk) → DynamoDB, with Terraform and IAM securing the flow.
🚧 Development Notes
Challenges I Tackled
GitHub Push Woes: Battled large files (terraform-provider-aws_v5.98.0_x5.exe) and a sneaky Azure Entra ID Token (in Backend/node_modules/aws-sdk/apis/sso-oidc-2019-06-10.examples.json) with git filter-repo—history rewrite FTW!
CORS Headaches: Got the frontend-backend chat working with CORS tweaks.
Terraform State: Stuck with local state for MVP, but remote S3 state is next.
Lessons I Learned
Commit .gitignore first—saved me from node_modules/ nightmares.
IAM roles beat hardcoded creds every time.
Big pushes need history cleanup to dodge GitHub limits.
Future Upgrades
Auth: OAuth or AWS Cognito to lock it down.
Monitoring: Beef up CloudWatch with alarms.
VPC: Custom VPC for network ninja moves.
CI/CD: GitHub Actions to automate deploys.
🔧 Setup Instructions
What You Need
Node.js: v20.x from nodejs.org.
AWS CLI: Set up with my IAM user (arn:aws:iam::459887393306:user/andrewbrown) and us-east-1.
Elastic Beanstalk CLI: npm install -g @aws-sdk/elastic-beanstalk-cli.
Terraform: v1.x from terraform.io.
Git: Grab it from git-scm.com.
Get Started
Clone the repo:
bash

Copy
git clone https://github.com/JasonWilkerson1/FullStackAWSProject.git
cd FullStackAWSProject
Install deps:
bash

Copy
cd frontend/react-admin-app
npm install
cd ..\..\backend
npm install
Run locally:
bash

Copy
cd backend
npm start
cd ..\frontend\react-admin-app
npm start
Go Live
Deploy frontend:
bash

Copy
cd frontend/react-admin-app
npm run build
aws s3 sync build/ s3://stackguardbucket/ --region us-east-1
Deploy backend:
bash

Copy
cd ..\..\backend
eb deploy
Apply Terraform:
bash

Copy
cd ..\terraform
terraform apply
🎥 Demo
Video: Coming Soon (uploading soon!).
Screenshots: Check /docs (pending upload).
🤝 Contributing
Issues: Drop bugs or ideas in GitHub Issues.
PRs: Fork, branch, and PR—let’s collab!
Style: Stick to Airbnb JS guidelines.
📜 License
MIT License - Free to tweak and use. See LICENSE.

🌐 Shoutouts
Big thanks to AWS docs (even the dense ones!) and xAI’s Grok and Googles Gemini for the assist!
Inspired by my love for scalable tech solutions.
