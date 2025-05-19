#PROJECT NAME: Rwandan Citizens Engagement System
#LINK: https://adolphenayituriki.netlify.app/

Based on today's delay to receive response by citizens from government, i developed the Citizen Engagement System to provide a simple, 
accessible platform for Rwandan citizens to report issues related to public services, track the progress of their complaints, and receive
timely responses from local authorities. This system promotes transparency, accountability, and improved service delivery. Here is how my system works,
I started by allowing citizens to create an account. They fill out a registration form with their full name, province, district, gender, email, and national ID number, 
if they have not an account before. This helps me ensure the system is secure and that complaints can be tracked back to real users.
All this information is safely stored in a MySQL database I created.

After registration, users log in securely. I used PHP sessions to maintain user login states. This ensures a safe, personalized experience for each citizen
who logs into the system. Only authenticated users can submit or track complaints. Once logged in, the user is taken to the citizens dashboard.
I designed the dashboard to be easy to navigate. From here, users can access different sections like submitting a complaint, tracking existing issues,
or contacting support.
The main feature is the complaint submission form. Users can describe their complaint by providing their current district, the district where the issue happened,
and selecting a complaint category. If their issue doesn't fit the provided options, they can type in a custom complaint. This data is sent to the database upon submission.

Step 5: On the backend, I store all submitted data in a structured database by using WAMP Server.
I’ve created tables to hold user data, complaint categories, and complaint statuses. This setup helps me manage and retrieve information efficiently,
whether it's for tracking or review. I included a complaint tracking feature, where users can see the status of their complaint whether it's pending, being reviewed,
or resolved. This transparency is very important to build trust between citizens and public services.

On admin side, responsible leader and government shoul flow the citizen's issue by reviewing and respond to complaints. I have enabled administrators to view all
submitted complaints, categorize them based on Public services, and update their status.
This creates a feedback loop where users are informed about actions taken on their concerns. Finally, I provided direct contact options for support.
Users can reach out via phone, WhatsApp, or social media if they need urgent help. I also added a "Contact Us" section and links to platforms
like YouTube to follow how the government interact by them and other platforms, which help build credibility and offer more ways for citizens to engage.
This system reflects my vision of a better Rwanda one where every citizen has a voice, every issue matters, and the government is held accountable through simple, 
technology-driven engagement.

AS CONCLUSION,
This project is a web-based Citizen Engagement System designed to empower Rwandan citizens to easily report complaints or issues related to public services.
It provides an intuitive platform where users can create accounts, submit complaints, and track progress through a structured digital workflow. 
Each complaint is categorized (e.g., health, education) and stored in a database for efficient response by relevant authorities. 
The system promotes transparency, accountability, and improved service delivery by enabling citizens to directly interact with government bodies. 
It is built using HTML, CSS, PHP, MySQL, and Bootstrap for responsiveness and ease of use.

#www.nayituriki.com@gmail.com
NAYITURIKI Adolphe
Huye-campus
