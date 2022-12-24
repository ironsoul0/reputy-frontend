import { useContractFunction, useEthers } from "@usedapp/core";
import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

import { Modal } from "../../components";
import StyledDropzone from "../../components/StyledDropzone";
import { useRegistryContractWrite } from "../../hooks";

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

const IPFS_URI = "https://ipfs.io/ipfs";

const CreatePage: FC = () => {
  const { account } = useEthers();
  const registryContract = useRegistryContractWrite();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adminAddress, setAdminAddress] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [ipfsImageData, setIpfsImageData] = useState("");
  const [tag, setTag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toastRef = useRef<any>(null);
  const [contractAddress, setContractAddress] = useState("");

  const { state, send } = useContractFunction(registryContract, "registerApp");

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleLinkChange = (event: any) => {
    setLink(event.target.value);
  };

  const handleAdminAddressChange = (event: any) => {
    setAdminAddress(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleImageUpload = async (file: any) => {
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
            "Content-Type": `multipart/form-data;`,
            Authorization: JWT,
          },
        }
      );
      console.log("IpfsHash", res.data.IpfsHash);
      setIpfsImageData(res.data.IpfsHash);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = () => {
    console.log(
      title,
      `${title} | Reputy`,
      link,
      typeof tag === "object" ? (tag as any).value : tag,
      "RPT",
      `${IPFS_URI}/${ipfsImageData}`,
      description,
      [adminAddress]
    );

    send([
      title,
      `${title} | Reputy`,
      link,
      typeof tag === "object" ? (tag as any).value : tag,
      "RPT",
      `${IPFS_URI}/${ipfsImageData}`,
      description,
      [adminAddress],
    ]);
  };

  useEffect(() => {
    if (state.status === "Mining") {
      toastRef.current = toast.loading("Mining your transaction..");
    } else if (state.status === "Success") {
      toast.update(toastRef.current, {
        render: "Successfuly created rating contract your DApp",
        type: "success",
        isLoading: false,
        progress: 50,
      });

      const id = setTimeout(() => {
        toast.dismiss(toastRef.current);
        clearTimeout(id);
      }, 2000);

      setContractAddress((state?.receipt as any).events[0].args[0]);
      setShowModal(true);
    } else if (state.status === "Fail") {
      toast.update(toastRef.current, {
        render: "Failed to mine your transaction",
        type: "error",
        isLoading: false,
      });

      const id = setTimeout(() => {
        toast.dismiss(toastRef.current);
        clearTimeout(id);
      }, 2000);
    } else if (state.status === "Exception") {
      toast.error("Something is wrong.. Please check your connection.");
    }
  }, [state]);

  // useTopUp();

  return (
    <div className="tw-mt-10">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        contractAddress={contractAddress}
      />
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
          className="h-32 tw-mb-4 tw-w-full tw-bg-gray-800 tw-rounded tw-border tw-border-gray-700 focus:tw-border-indigo-500 focus:tw-ring-2 focus:ring-indigo-900 tw-text-base tw-outline-none tw-text-gray-100 tw-py-2 tw-px-3 tw-resize-none tw-leading-6 tw-transition-colors tw-duration-200 tw-ease-in-out tw-block"
          type="text"
          placeholder="Title of the project"
          onChange={handleTitleChange}
          value={title}
        />
        <input
          className="h-32 tw-mb-4 tw-w-full tw-bg-gray-800 tw-rounded tw-border tw-border-gray-700 focus:tw-border-indigo-500 focus:tw-ring-2 focus:ring-indigo-900 tw-text-base tw-outline-none tw-text-gray-100 tw-py-2 tw-px-3 tw-resize-none tw-leading-6 tw-transition-colors tw-duration-200 tw-ease-in-out tw-block"
          type="text"
          placeholder="Link to the project"
          onChange={handleLinkChange}
          value={link}
        />
        <input
          className="h-32 tw-mb-4 tw-w-full tw-bg-gray-800 tw-rounded tw-border tw-border-gray-700 focus:tw-border-indigo-500 focus:tw-ring-2 focus:ring-indigo-900 tw-text-base tw-outline-none tw-text-gray-100 tw-py-2 tw-px-3 tw-resize-none tw-leading-6 tw-transition-colors tw-duration-200 tw-ease-in-out"
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
          options={tagOptions as any}
          placeholder="Select project tag"
        />

        <StyledDropzone onImageChange={handleImageUpload} />
      </div>
      <button
        type="button"
        className="mt-4 tw-text-white tw-bg-blue-700 focus:ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 focus:tw-outline-none tw-transition-all disabled:tw-cursor-not-allowed disabled:tw-opacity-40 hover:tw-bg-blue-800"
        onClick={handleFormSubmit}
        disabled={
          !title || !link || !description || !ipfsImageData || !tag || !account
        }
      >
        Submit Project
      </button>
    </div>
  );
};

export default CreatePage;
