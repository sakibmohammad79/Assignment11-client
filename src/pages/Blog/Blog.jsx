import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle('Blog');
  return (
    <div className="max-w-6xl mx-auto my-12 space-y-6 bg-slate-50 drop-shadow-md p-8">
      <div>
        <h3 className="text-2xl font-bold text-rose-500">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <p className="text-teal-500 font-bold text-lg">
          Answer:
          <br /> <span className="text-rose-500">Access Token:</span> An access
          token is a piece of data that allows a client application to access
          protected resources on a server on behalf of a user. An access token
          usually has a short lifetime and expires after a certain period.{" "}
          <br />
          <span className="text-rose-500">Refresh Token:</span> A refresh token
          is a piece of data that allows a client application to obtain new
          access tokens when the current one expires32. A refresh token usually
          has a longer lifetime than an access token and can be used multiple
          times until it is revoked.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-rose-500">
          2. Compare SQL and NoSQL databases?
        </h3>
        <p className="text-teal-500 font-bold text-lg">
          Answer: SQL and NoSQL databases are two types of databases that differ
          in their structure, scalability, language, and use cases. Here are
          some of the main differences between them:<br></br>
          Structure: SQL databases are relational databases that store data in
          tables with rows and columns. SQL databases have a predefined schema
          that requires data to be organized and structured before storing.
          NoSQL databases are non-relational databases that store data in
          various formats such as documents, key-value pairs, graphs, or
          columns. NoSQL databases have a dynamic schema that allows data to be
          stored without prior structuring<br></br>Scalability: SQL databases
          can scale vertically by adding more resources such as CPU, RAM, or SSD
          to a single server. SQL databases can also scale horizontally by
          partitioning or sharding data across multiple servers, but this is not
          well-supported and may require additional logic. NoSQL databases can
          scale horizontally by adding more servers or nodes to a cluster. NoSQL
          databases can handle large volumes of unstructured data and distribute
          it across multiple servers easily.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-rose-500">
          3. What is express js? What is Nest JS?
        </h3>
        <p className="text-teal-500 font-bold text-lg">
          Answer: Express.js and Nest.js are two popular frameworks for building
          web applications with Node.js. Here are some of the differences
          between them:
          <br />
          Express.js is a minimalist and unopinionated framework that provides a
          thin layer of fundamental web application features, such as routing,
          middleware, and error handling. Express.js does not force you to use
          any specific libraries or tools, giving you full flexibility and
          control over your application. Express.js is suitable for simple and
          lightweight applications that do not require complex architecture or
          features.
          <br />
          Nest.js is a progressive and opinionated framework that provides a
          robust set of features for building efficient, reliable, and scalable
          server-side applications. Nest.js is built with and fully supports
          TypeScript, and combines elements of object-oriented programming,
          functional programming, and reactive programming. Nest.js also
          leverages the power of Express.js under the hood, but also exposes its
          APIs directly to the developer. Nest.js is suitable for complex and
          enterprise-grade applications that require a well-defined structure
          and design patterns.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-rose-500">
          4. What is MongoDB aggregate and how does it work?
        </h3>
        <p className="text-teal-500 font-bold text-lg">
          Answer: MongoDB aggregate is a method that performs aggregation
          operations on a collection or a view using an aggregation pipeline. An
          aggregation pipeline is a sequence of stages that process and
          transform documents as they pass through the pipeline. Each stage can
          perform operations such as filtering, grouping, sorting, projecting,
          calculating, and joining documents.
          <br />
          MongoDB aggregate works by taking an array of pipeline stages as an
          argument and returning a cursor that iterates over the output
          documents. The cursor can also have options such as batchSize,
          maxTimeMS, allowDiskUse, and collation.
          <br /><br/>
          MongoDB aggregate can perform various types of aggregation operations
          such as:<br/> 1.Grouping values from multiple documents together and
          performing operations on the grouped data to return a single result.<br/>
          2.Analyzing data changes over time or across different categories.<br/>
          3.Joining data from multiple collections or sources using the $lookup
          stage.<br/> 4.Facilitating data analysis and visualization using the $bucket,
          $facet, $graphLookup, and $geoNear stages.<br></br> 5.Updating or writing data to
          a collection or a view using the $merge or $out stages.
        </p>
      </div>
    </div>
  );
};

export default Blog;
