import { Button, Form, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import UploadImage from "../../components/UploadImage";
import { createMovie, createMovieType, uploadImage } from "../../services/api";

const { TextArea } = Input;
const AddMovie: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [_, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const Submit = async (values: Omit<createMovieType, "movieImageId">) => {
    if (!file) return false;
    setLoading(true);

    try {
      await message.loading("Carregando...");
      const imagem = await uploadImage(file);
      await createMovie({
        ...values,
        movieImageId: imagem.id,
      });
      await message.success("Enviado com sucesso!");
      form.resetFields();
      setFile(null)
      setImagePreview(null);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const onDropUpload = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length < 1) return;
    setFile(acceptedFiles[0]);

    setImagePreview(URL.createObjectURL(acceptedFiles[0]));
  };
  return (
    <div>
      {contextHolder}
      <Title level={3}>Adicionar Filmes</Title>
      <div className="containerUpload">
        <UploadImage onDrop={onDropUpload} image={imagePreview} />
        <Form
          form={form}
          name="wrap"
          // labelCol={{ flex: "110px" }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          onFinish={Submit}
        >
          <Form.Item name="autor" rules={[{ required: true }]}>
            <Input disabled={loading} placeholder="Autor" />
          </Form.Item>

          <Form.Item name="titulo" rules={[{ required: true }]}>
            <Input disabled={loading} placeholder="Título" />
          </Form.Item>

          <Form.Item name="descricao">
            <TextArea disabled={loading} placeholder="Descrição" rows={4} />
          </Form.Item>

          <Form.Item label=" ">
            <Button disabled={loading} type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddMovie;
