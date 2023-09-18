# unclePatFishShop
Steps required to run your application.
    to run
        cd into the root folder with the docker-compose.yml
        run: docker compose up -d --build
    to stop application: 
        docker compose down 

    
Explain how you would deploy this app on a cloud environment (Bonus: How you would do this with serverless components).
    Backend: 
        I would run the backend on a ec2 instance.
        If I had access to gitlab, I would use gitlab instead, and configure it such that after every push, the file would compile and package itself into docker images. 
        Then push the image into ecr (elastic container registry) 
        Then ecs will pull the latest image from the ecr and spin it up on a ec2 instance. Doing a rolling update to take down certain instance for the upgrade while allowing some old instances to run so that there is 100% uptime.

        For database, I would use RDS as the relational database. 

    Frontend: 
        For the frontend, I would host it as a static website on s3 then use cloudfront to act as a cache. I would use Route53 to create and host a domain and link it to cloudfront. 

        These apps would communicate through the API gateway.

    Serverless: 
        I would change the backend completely, and use lambda and connect it to the same API endpoint which the frontend is using. This Lambda would be incharge of the database operations with RDS. 
        
        he frontend would be the same as above. 



Explain security hardening techniques on a cloud environment.
    IAM: 
        configure IAM permissions to be the least privillege.
        Never use the root user
        Don't use long term credentials: always use short term credentials
    OS: 
        Regularly patch OS on all systems to ensure bugs that the OS developers have patched are updated.
    Backup and Disaster Recovery: 
        Deploy across multiple AZs
        Across multuple regions as well if application is global
        For database, always have a replicated database incase oringal database is compromised. 
    Logging: 
        Enable detailed logging for all cloud applications and monitor them in a central location to ensure applications are always up and running. 
    Data Encryption: 
        Data at rest: Always encrypt data at rest especially sensitive data such as identification information and passwords
        Data at transit: always encrypt data which is being transfered. 
    Security Automation: 
        As all these configurations can be very hard to be consistent with, always implement infrastructure as code (IaC) to automate the provisioning and configuration of cloud resources securely.
    Container Scanning: 
        Upon uploading of images onto ecr, perform analysis on the images to look out for vulnerabilities.