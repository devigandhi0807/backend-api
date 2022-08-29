import { Inject, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { Provider } from '@nestjs/common';
import { UploadedMulterFileInterface } from 'src/common/interfaces/upload-multer-file.interface';

// Set the AWS Region.
const REGION = 'us-east-1';

// Unique identifier of the service in the dependency injection layer
const SpaceManagerServiceLib = 'lib:do-spaces-service';

const spacesEndpoint = new AWS.Endpoint('nyc3.digitaloceanspaces.com');

const S3 = new AWS.S3({
  endpoint: spacesEndpoint.href,
  region: REGION,
  credentials: new AWS.Credentials({
    accessKeyId: 'BTAN2JJ2RL6IBF53DU4K',
    secretAccessKey: 'uflztKewteaAzaZ+eQqcAT39z8Cs33y6wJoyGYS5XhE'
  })
});

// Space Manager Service provider
export const SpacesManagerServicerovider: Provider<AWS.S3> = {
  provide: SpaceManagerServiceLib,
  useValue: S3
};

@Injectable()
export class SpaceManagerService {
  constructor(@Inject(SpaceManagerServiceLib) private readonly s3: AWS.S3) {}

  async uploadFile(file: UploadedMulterFileInterface) {
    // Precaution to avoid having 2 files with the same name
    const fileName = `${Date.now()}-${file.originalname}`;

    // Return a promise that resolves only when the file upload is complete
    return new Promise((resolve, reject) => {
      this.s3.putObject(
        {
          Bucket: 'hydraftc',
          Key: fileName,
          Body: file.buffer,
          ACL: 'public-read'
        },
        (error: AWS.AWSError) => {
          if (!error) {
            resolve(`${S3.endpoint}/${fileName}`);
          } else {
            reject(
              new Error(
                `SpaceManagerService_Error: ${
                  error.message || 'Something went wrong'
                }`
              )
            );
          }
        }
      );
    });
  }

  async findAll() {
    try {
      const data = await this.s3
        .listObjectsV2({ Bucket: 'hydraftc' })
        .promise();

      const bodyContents = await data;
      //console.log(bodyContents);
      return bodyContents;
    } catch (err) {
      console.log('Space Manager Listing Error', err);
    }
  }
}
