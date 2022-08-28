from __future__ import print_function
import pickle
import os
import json
import datetime
import time
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# enter xlsx file name here

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/drive']
# create a logger


def getFiles(service, logger):
    # page_token = None

    results = service.files().list(q="'1ZtT-VQoj0V-4YqT7hUcFZioalqbzjdEv' in parents and mimeType contains 'image' and trashed=false",
                                   spaces='drive', fields="nextPageToken, files(id, name)", pageSize=1000).execute()
    items = results.get('files', [])

    # print(len(items))
    # for i in items:
    if not items:
        logger.write('No files found.\n')
        print('No files found.')
        return None
    else:
        # print('Files:')
        logger.write('Files found...\n')
        return items


def main(logger):
    """Shows basic usage of the Drive v3 API.
    Prints the names and ids of the first 10 files the user has access to.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)  # credentials.json download from drive API
            creds = flow.run_local_server()
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('drive', 'v3', credentials=creds)
    items = getFiles(service, logger)
    print(items)
    logger.write('Files found: ' + str(len(items))+"\n")

    # write items in a json file
    with open('items.json', 'w') as outfile:
        json.dump(items, outfile)
    print("success: done writing items.json")
    logger.write('success: done writing items.json\n')
    # get files with query
    #   q: "'1ZtT-VQoj0V-4YqT7hUcFZioalqbzjdEv' in parents and mimeType contains 'image' and trashed=false",


def final(logger):
    while True:

        # write initial time in log file started at
        logger.write('started at: ' + str(datetime.datetime.now())+"\n")
        main(logger)
        time.sleep(60)


if __name__ == '__main__':

    logger = open('log.txt', 'a+')
    final(logger)
