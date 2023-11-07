import { RecordSchema } from "@orbit/records";
import { JSONAPISource } from "@orbit/jsonapi";

const schema = new RecordSchema({
  models: {
    article: {},
    articles: {
      attributes: {
        title: { type: "string" },
      },
      relationships: {
        comments: [{ type: "comments", id: "string" }],
      },
    },
    people: {
      attributes: {
        firstName: "string",
        lastName: "string",
        twitter: "string",
      },
    },
    comments: {
      attributes: {
        body: "string",
      },
    },
  },
});

const remote = new JSONAPISource({
  schema,
  name: "remote",
  host: "/api",
});

const fetchData = async () => {
  const data = await remote.query((q) =>
    q.findRecords("article").options({
      settings: {
        params: {
          includeRelationshipsMeta: "comments",
        },
      },
    })
  );
  return data;
};

export { schema, remote, fetchData };
