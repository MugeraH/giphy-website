export class GifItem {
  constructor(
    public id: number,
    public images: { downsized: { url: string } }
  ) {}
}
