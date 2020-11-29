# nbva-registration

- Uses IFTTT to send the notification, via IFTTT app when message `No events open for registration, check back soon!` goes off the NBVA registration page.
- It's deployed as a lambda which runs every minute.


## Creat IFTTT Applets
You can follow the [link](https://www.mathworks.com/help/thingspeak/use-ifttt-to-send-text-message-notification.html) to steup IFTTT applet.

## Configuration
- Create a file using `src/config.example.json` called `src/config.json`.
- Need to add the ifttt webhook url from the above section.
- Need to add the NBVA url to listen the endpoint.


## Running locally
- `sls invoke local -f nbvaRegistrationHandler`

## Deloyment
- Need AWS credentials in your local.
- Run command `AWS_PROFILE=<profile> sls deploy`
