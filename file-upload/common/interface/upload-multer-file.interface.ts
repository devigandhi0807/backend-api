// This is just a simple interface that represents an uploaded file object
export interface UploadedMulterFileInterface {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
