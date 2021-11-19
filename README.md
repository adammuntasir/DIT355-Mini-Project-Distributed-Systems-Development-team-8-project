# Dentistimo

## What?
A software that keeps track of the availaiblity of free time-slots for dentists in Gothenburg, where the client uses a browser-based application to visualize the locations of the dentists and book a specific dentist by clicking on the marker on the map. A confirmation of the booking will be displayed to the client according to the availablity otherwise a rejection will be displayed.

## Why?
In order to automatically get a list of available dentists according to the time window set by the client.

## How?
The visualiser recieves the dentists registry over the MQTT-protocol.

## Technologies used
*  MQTT with HiveMQ broker
*  MapBox
*  Node.js

## Developers
* Leila Bencheikh
* Maab Mohammedali
* Mila Mehrvarz
* Muntasir Adam
* Ramzi Abu Zahra

## Software Architecture


<br>
<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7V1vk5o4GP80vnSHBBLgZXXb68x1Z7bT3l3v3rGKyhWFQ9xd%2B%2BkvEaImhDUqEGTZzlQTMECe3%2FM3zxMG5nj5%2BlvixYuHaOqHA2hMXwfm%2FQBCBIBFPmjPNusBtmtnPfMkmGZ9xqHjW%2FDLz09kvZtg6q%2FzvqwrjaIwDWK%2BcxKtVv4k5fq8JIle%2BNNmUTjlOmJv7hc6vk28sNj7VzBNF1mvA%2B1D%2F2c%2FmC%2FYlQF2syNLj52cP8l64U2jl6Mu8%2BPAHCdRlGbflq9jP6Szx8%2FLp5Kj%2BxtL%2FFWq8oN%2FnoHnPM3j359XwNl%2B%2FPzD%2BP7HMB%2Fl2Qs3%2BQMPIA7JeKOY3nK6zecB%2F7eh9zlaesk8WA3MD%2BQojl%2FJ%2F8b%2Bf3NEieO%2FpkMvDOb5SRNyd36SHZtFq3S43pGYHgJ2%2FiM2OPk2zz%2FD7PNTLPa14LaepLdwxijeMiZfwmJrHC3jaEXpybr5n4iz81S4teTae%2BvuxH%2BKEsKT44U%2F%2BUlu4I1JlD39NHiuZGavxk7FZJY9%2FO5ZWS%2FkrgRzSt6H%2Fowej579ZBbupNosINLGHC3SJfm4B3TOkij%2BTvDhU%2FFk5PeXS3hg70cnQxCQlAo1sBeVRMn40dJPky05Jf8Bxk72k1y%2FOBbO2i8HYW1buQReHAnqvVj2cgUx3499kKHkSy5GzxCpUCJShVkkqiCmXyd7fjdH%2F%2FppumUqxmEde91iXTp%2F5WK%2FdFJBYQqhbAbzvsQPvTR45vWlbFbz6z1GARVw7GJDaHEUtPgBotlsTQAkEmV%2F05fTyexVX6%2F63sfE%2FxmsN%2BRGfvV6ryt6b4gNmxObpgsLUtuUi%2B26FJ91A4rP7BXfEBXpNIaDD0cimDRHVTPddRLgL%2F9pHaS%2BnIMFkDXNisjiWdFi7SMcAUcCJLcuTsTqnLiMphva1ywbojaxIU89uyk2tNtsf%2FaG3k1O%2FGMQl8hI2UO33cYBpsGxptS5Z7KNd%2B5hTZLVuQEbx26TcNVk47in6ZREm9XUn%2Bb4jZJ0Ec2jlRd%2BiaI4R%2FmOSjlRvE0a8Tzgr6Yf6AoDaa4IobOeTztW2Q25%2FumnkwVrRJtk4j%2F6SUAezU%2B%2Bxd4kWM3zg%2BmOk0oOyoHhTwvrFgJfkYfdXfO0JZgyRi47D5QwasWqFyFB%2BeaTlv2qepCwNaamULLwwtk4SCZhESuEdMn2B23cIdb8%2B6jJVsYwhVKaRD%2F3q1FARNrleNGGA%2BAKYoI5syeAQCbW2x6dFtMT1rVARbZQJkCFDBPEa0rblwXxVSgX0yMviRfzkGCKdm8neOs4W7ucBa8Ua6PEJ8ree9qNTGmaPxi5DBoN0D1F4iYNg5U%2F3i97FiROHRrZRIKr40hcHYk6AXV5OkASbW%2B9M%2Ftt87SeJMFTWThOsz8LDMQR2WVtbf4skMXqW%2BXQZjhsi9GlyaMFkghg65nxcfMUButFO3nRRPzypmsUkdQwK0qihy1jRatnRWJR3SArtlsv2tDkedHUzYtQwX%2FRzItuz4tDKPEdWs%2BLrVaLANiCXtTPixJHpF28eGpO3wcvSjyJinixAkYsDPElmgeTNnKga7WOAc9IP9DEgK1KPtDFgAr%2Bw61E5v3XIP3BLkm%2BHwVsSev%2B9ei0%2B%2B2bvFhJNJ%2FFwk6GcWHJCtGVmBLtYxvxI9QczYcKWQ%2B3F81nGDNagjFLL8awZozJkjYEjHV%2FGQAyScOoYEmUf5OrAKbEw7pVpVIj8zIBfZJ5zRJL5UrmBcDEAvviRtnXVHDSbk9F1IkY1ZXh2hBja0aMwspT9wU%2BAAgIZNAt8RW8vV7in8G%2FuB7%2BLSxg2eYdtA%2F%2FzGa5uWHnU4%2F837sMd9jGnNtggLcdB9rYgzTvU0ejIsgUYGvXhEbLEt2HhrWJgov6DrSJaYtk0K1NFNy6XpvsF5VPM3rJst%2BV%2FOu4ojJpmH0Vsr9vX31UaX4oO5z1AKawStE0YBTS0Lsv713YMufBajjvu0lxfzD%2BLMSMvdz4g1qNP4vNsSbjT9wppGlZwGKk3VIeu98e8LRrNbEMoWqJZKirHEyFXLCmwaQQyOy%2BYsEFe1C3YunLzuqoDnJcjsxgv6%2FFCW67oNAonxL1QqMzL3RAVzZkpVIByeya1lQ2d7Lguq901zTx917qffZW07Df06grexoBy%2BELzxzmqOnbzA8pWO3aC%2F6R8fa8FiaxixX%2FSGIStz7Lvt0VLwAxP4MZ2FB3JShqfSUoKvE431WWL%2BorQavmRdcVqrL182LrS0FRXwpKJkGy6Nx6Xmxt4Quwcev4UGH1WjMfloT03xcfNrx63MbgoMqeVLm4OhnaxyVez7VJQi4SY%2Ftq0cbKcNJwEPnmswyYsakPMa5exGCF9ezurwYBV1zhxRLN3ORyEO7LUqrl33qKDIhNJ5h02NaYpIwlgazuyf9DnoprwQGXp2KweloteSqswlBXngqxSPldbxvXJn3Jy04ouAIZtGuTvuRFSZtAVUavqcjABoI2aZp%2F30WRS5WIUfY460KMGFJqGjF9WcqODGbb%2FIcOl6Uc7D8bWrz9x8xBPeafq9f8KyRBNC4MOlnkoilPWd0YqacABiBLszPRV8DsyCDahLpViy1T%2Be1JDUyk99CVxMduP10lD1dvVmT35u3h6%2Ffv5PhnoioevpIvI6oNE%2FVpEERy21JDh7bwTgJgMkVy%2FL5Lg20L28wLL%2B0O2edHdYOY2eeZreW67psGucyyFw30I0vOcEzelsvjvW8YaLvW5Tb%2FSStNtUq5JpN%2FaGHeSHMcNSNNMhJyCb0MCzkGxhYAItOYmEy3YUBsuy6yxeTckuKXqmxBRyGwfCvsIoKedz%2FwGfisHk7AYFVNOd2xY1IuPvxdhi7qnN7ho79zLlI3tjocHG8XthxeVgEg5rWpwwnicjgVx60bQR3amPiNTQGwc5Zyvy7aVpnmderZTXZoCQUOSPHFc5WBrpN7FrfgjZW1AQYJgDGbfWWl029AnFnMAhlYcq2ueJoji5pnjjZ9fhXfHkrfAPFISEBmhYA2WpGTvnhbzq3PBi%2Fx4ml4gqd4xrjjKIySgwqiLr3QVUAGJVcw8cIP%2BYFlMJ2GZRDjJVY9rygkngzv3JhsT5DjNHIm3o8xYNaGAVmsuwoMjDZrwmLrNaV%2FVhfR46DEHLUlJcMm2%2FazERQws7VyFDzspvqFTE5P%2FwP9hRcCAMj2%2BNYHANhFm%2B6cBdSDu3G8A9nbWZ3qNuJJ289VzeAse2nrtUYiEsJulqKL3NzrrN0%2Bx5MSCgqxDENSitaoGel2OIylzuEnGdetpxBgCBx0Z5hHMUwhJoUMeCfEzNW3niosYDUb33I7mRZ6mVoybSHlDGgtOXA174tuCXu2AATVlggaVFh9iiollLB%2FPaDA1auwOrQEXpAXJWLq1HJ1lYpONTW97KXnV2tE%2B4RGBJdrRCJ37aORoV0QQ2LmxsUqkjSTiHrTh9OJVFg8RFOfnvE%2F"> <img  src="./Component.png"><br>
*Component Diagram*

## Setup and running

### Dependencies
1. Node.js & Npm (https://nodejs.org/en/download/)
2. Git (https://git-scm.com/downloads)

### Setup
1. Move the file Global_Keys in the Documentations folder to the parent directory
2. The components (DataHanlder, DataExtractor, Pipe) can all be setup with command (npm i mqtt)
3. The component (Visualizer) can be setup with command  (npm init) then (npm i serve)
4. Go to package.json and add under scripts property, above the test subproperty the following line "dev": "serve .",



### Running

1. Run each component except for the Visualizer using Node.js by typing the following command:  (node index.js)
2. Go to Visualizer and run it by typing (npm run dev)
3. Open the port that will be displayed in the console
4. Choose website.html from the choices in the web browser

