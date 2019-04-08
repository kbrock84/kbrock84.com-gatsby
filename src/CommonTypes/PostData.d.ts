type PostData = {
  category: string;
  children: PostDataChildren[];
}[];
type PostDataChildren = {
  title: string;
  path: string;
};
