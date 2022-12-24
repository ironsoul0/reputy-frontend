import axios from "axios";
import { FC, useState } from "react";
import Select from "react-select";

import StyledDropzone from "../../components/StyledDropzone";

const JWT = process.env.NEXT_PUBLIC_PINATA_TOKEN;

const tagOptions = [
  { value: "Games", label: "Games" },
  { value: "Ecommerce", label: "Ecommerce" },
  { value: "DeFi", label: "DeFi" },
  { value: "Tools and Utility", label: "Tools and Utility" },
  { value: "Collectibles", label: "Collectibles" },
  { value: "Social Networks", label: "Social Networks" },
  { value: "Marketplaces", label: "Marketplaces" },
  { value: "DEX", label: "DEX" },
  { value: "Other", label: "Other" },
];

const statusOptions = [
  { value: "Launched", label: "Launched" },
  { value: "Coming soon", label: "Coming soon" },
];

const CreatePage: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adminAddress, setAdminAddress] = useState("");
  const [image, setImage] = useState("");
  const [ipfsImageData, setIpfsImageData] = useState("");
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAdminAddressChange = (event) => {
    setAdminAddress(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUpload = async (file) => {
    if (!file) return;
    setImage(file);
    const formData = new FormData();

    formData.append("file", file);

    const metadata = JSON.stringify({
      name: "File name",
    });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: JWT,
          },
        }
      );
      setIpfsImageData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = () => {
    const projectData = {
      title,
      description,
      tag,
      status,
      ipfsImageData,
    };
  };

  return (
    <div className="tw-mt-10">
      <p className="tw-text-white tw-text-3xl tw-font-bold tw-text-left">
        Create rating for your DApp
      </p>
      <p className="tw-pt-4 tw-text-gray-400 tw-pb-5">
        This form allows you to create ranking for your own decentralized
        application. Let us know some details about your project and we are
        going to deploy the rating smart contract for you to integrate with your
        DApp.
      </p>
      <div className="tw-mb-0 tw-pb-0">
        <input
          className="h-32 tw-mb-6 tw-w-full tw-bg-gray-800 tw-rounded tw-border tw-border-gray-700 focus:tw-border-indigo-500 focus:tw-ring-2 focus:ring-indigo-900 tw-text-base tw-outline-none tw-text-gray-100 tw-py-2 tw-px-3 tw-resize-none tw-leading-6 tw-transition-colors tw-duration-200 tw-ease-in-out tw-block"
          type="text"
          placeholder="Title of the project"
          onChange={handleTitleChange}
          value={title}
        />
        <input
          className="h-32 tw-mb-6 tw-w-full tw-bg-gray-800 tw-rounded tw-border tw-border-gray-700 focus:tw-border-indigo-500 focus:tw-ring-2 focus:ring-indigo-900 tw-text-base tw-outline-none tw-text-gray-100 tw-py-2 tw-px-3 tw-resize-none tw-leading-6 tw-transition-colors tw-duration-200 tw-ease-in-out"
          type="text"
          placeholder="Admin address"
          onChange={handleAdminAddressChange}
          value={adminAddress}
        />
        <textarea
          className="h-32 tw-mb-4 tw-w-full tw-bg-gray-800 tw-rounded tw-border tw-border-gray-700 focus:tw-border-indigo-500 focus:tw-ring-2 focus:ring-indigo-900 tw-text-base tw-outline-none tw-text-gray-100 tw-py-2 tw-px-3 tw-resize-none tw-leading-6 tw-transition-colors tw-duration-200 tw-ease-in-out"
          rows={3}
          placeholder="Project desription"
          onChange={handleDescriptionChange}
          value={description}
        />
        <Select
          className="tw-mb-6 tw-text-white tw-text-left"
          styles={{
            control: (base) => ({
              ...base,
              background: "#1F2937",
              color: "white",
            }),
            menu: (base) => ({
              ...base,
              background: "#1F2937",
            }),
            singleValue: (base) => ({
              ...base,
              color: "white",
            }),
            option: (base, { isFocused, isSelected }) => ({
              ...base,
              backgroundColor: isSelected
                ? "#007bff"
                : isFocused
                  ? "#6c757d"
                  : "#1F2937",
            }),
          }}
          defaultValue={tag}
          onChange={setTag as never}
          options={tagOptions}
          placeholder="Select project tag"
        />

        <StyledDropzone onImageChange={handleImageUpload} />
      </div>
      <button
        type="button"
        className="mt-4 tw-text-white tw-bg-blue-700 focus:ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 focus:tw-outline-none tw-transition-all disabled:tw-cursor-not-allowed disabled:tw-opacity-40 hover:tw-bg-blue-800"
        onClick={handleFormSubmit}
        disabled={!title || !description || !image || !tag}
      >
        Submit Project
      </button>
    </div>
  );
};

export default CreatePage;
